import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config';

export const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const creds = await signInWithEmailAndPassword(auth, email, password)
      const user = creds.user
      if (user) {
        const token = await user.getIdToken()
        console.log(token)
        localStorage.setItem('DFMJWTtoken', token)
      }
    } catch (err) {
      console.log(err)
    }


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative has-icon-left mb-4">
          <input
            type="text"
            className="form-control form-control-xl"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-control-icon">
            <i className="bi bi-person" />
          </div>
        </div>
        <div className="form-group position-relative has-icon-left mb-4">
          <input
            type="password"
            className="form-control form-control-xl"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-control-icon">
            <i className="bi bi-shield-lock" />
          </div>
        </div>
        <div className="form-check form-check-lg d-flex align-items-end">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label text-gray-600"
            htmlFor="flexCheckDefault"
          >
            Keep me logged in
          </label>
        </div>
        <button
          className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
          type='submit'
        >
          Log in
        </button>
      </form>
      <div className="text-center mt-5 text-lg fs-4">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <a href="auth-register.html" className="font-bold">
            Sign up
          </a>
          .
        </p>
        <p>
          <a className="font-bold" href="auth-forgot-password.html">
            Forgot password?
          </a>
          .
        </p>
      </div>
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config';
import { useAppDispatch } from '../../redux/hooks';
import { setLoggedIn } from '../../redux/auth/authSlice';
import { AuthService } from '../../libs/auth';
import { setTokenAndState } from '../../libs/auth/jwt';

export const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch();
  const nav = useNavigate()

  useEffect(() => {
    const authService = new AuthService()
    const fetchUser = async () => {
      const user = await authService.verifyLoggedIn()
      if (user.isAuth) {
        //REFACTOR: authSet
        dispatch(
          setTokenAndState({
            token: user.token,
            email: user.email
          }))
        // dispatch(setLoggedIn({
        //   email: user.email,
        //   loggedIn: true,
        // }));
        nav('/')
      }
    }
    fetchUser()
  }, [dispatch, nav])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const creds = await signInWithEmailAndPassword(auth, email, password)
      const user = creds.user
      if (user.email) {
        //REFACTOR: authSet
        const token = await user.getIdToken()
        dispatch(
          setTokenAndState({
            token,
            email: user.email
          }))
        // const token = await user.getIdToken()
        // localStorage.setItem('DFMJWTtoken', token)
        // dispatch(setLoggedIn({
        //   email: creds.user.email,
        //   loggedIn: true,
        // }));
        nav('/')
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
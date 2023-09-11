import { useState } from "react";
import { Footer, Header } from "../../components/base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import { setTokenAndState } from "./jwt";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const dispatch = useAppDispatch();
  const nav = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createUserWithEmailAndPassword(auth, email, password)
    if (result.user.email) {
      const token = await result.user.getIdToken();
      dispatch(
        setTokenAndState({
          token: token,
          email: result.user.email
        })
      )
      nav('/')
    }
  }

  return (
    <div id="main">
      <Header />
      <h1 className="auth-title">Sign Up</h1>
      {/* <p className="auth-subtitle mb-5">
        Input your data to register to our website.
      </p> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group position-relative has-icon-left mb-4">
          <input
            type="text"
            className="form-control form-control-xl"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-control-icon">
            <i className="bi bi-envelope" />
          </div>
        </div>
        {/* <div className="form-group position-relative has-icon-left mb-4">
          <input
            type="text"
            className="form-control form-control-xl"
            placeholder="Username"
          />
          <div className="form-control-icon">
            <i className="bi bi-person" />
          </div>
        </div> */}
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
        <div className="form-group position-relative has-icon-left mb-4">
          <input
            type="password"
            className="form-control form-control-xl"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="form-control-icon">
            <i className="bi bi-shield-lock" />
          </div>
        </div>
        <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
          Sign Up
        </button>
      </form>
      <div className="text-center mt-5 text-lg fs-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="auth-login.html" className="font-bold">
            Log in
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  )
}
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { setLoggedOut } from "../../redux/auth/authSlice"
import { useAppDispatch } from "../../redux/hooks"

export function LogoutPage() {
  const nav = useNavigate()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const logout = async () => {
      localStorage.removeItem('DFMJWTtoken')
      nav('/')
      dispatch(setLoggedOut())
    }
    logout()
  }, [nav, dispatch])

  return (
    <div>logging out</div>
  )
}
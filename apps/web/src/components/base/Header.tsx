import { Link } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import AuthBreadcrumbs from "../nav/AuthBreadcrumbs"

export function Header() {
  const { email, loggedIn } = useAppSelector(state => state.auth)

  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>DFM - DotFileMe</h3>
            <p className="text-subtitle text-muted">Where dotfiles can be social</p>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <AuthBreadcrumbs loggedIn={loggedIn} email={email} />
          </div>
        </div>
      </div>
    </div>
  )
}
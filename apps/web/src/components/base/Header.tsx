import { Link } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"

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
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-header float-start float-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">home</Link>
                </li>
                {loggedIn && (
                  <li className="breadcrumb-item">
                    {email}
                  </li>
                )}
                {loggedIn && (
                  <li className="breadcrumb-item">
                    <Link to="/logout">logout</Link>
                  </li>)}
                {!loggedIn && (
                  <li className="breadcrumb-item">
                    <Link to="/login">login</Link>
                  </li>
                )}
                {!loggedIn && (
                  <li className="breadcrumb-item">
                    <Link to="/register">register</Link>
                  </li>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
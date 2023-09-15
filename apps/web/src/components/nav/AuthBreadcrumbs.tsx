import { Link } from "react-router-dom"

export interface IAuthBreadcrumbsProps {
  email: string | null
  loggedIn: boolean
  dataTestId?: string
}

export default function AuthBreadcrumbs({ email, loggedIn, dataTestId }: IAuthBreadcrumbsProps) {
  function BreadcrumbHome() {
    return BreadcrumbLinkText({ text: 'home', to: '/' })
  }

  function BreadcrumbLogin() {
    return BreadcrumbLinkText({ text: 'login', to: '/login' })
  }

  function BreadcrumbRegister() {
    return BreadcrumbLinkText({ text: 'register', to: '/register' })
  }

  function BreadcrumbLogout() {
    return BreadcrumbLinkText({ text: 'logout', to: '/logout' })
  }

  function BreadcrumbDisplayEmail({ email }: { email: string }) {
    return BreadcrumbLinkText({ text: email, to: '/profile' })
  }

  function BreadcrumbLinkText({ text, to }: { text: string, to: string }) {
    return (
      <li className="breadcrumb-item">
        <Link to={to}>{text}</Link>
      </li>
    )
  }
  return (
    <nav
      aria-label="breadcrumb"
      className="breadcrumb-header float-start float-lg-end"
      data-testid={dataTestId}
    >
      <ol className="breadcrumb">
        <BreadcrumbHome />
        {loggedIn && email && (
          <>
            <BreadcrumbDisplayEmail email={email} />
            <BreadcrumbLogout />
          </>
        )}
        {!loggedIn && (
          <>
            <BreadcrumbLogin />
            <BreadcrumbRegister />
          </>
        )}
      </ol>
    </nav>
  )
}
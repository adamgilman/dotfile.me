import { Login } from "../../components/auth/LoginForm";
import { Footer, Header } from "../../components/base";

export function LoginPage() {

  return (
    <div id="main">
      <Header />

      <Login />

      <Footer />
    </div>
  )
}
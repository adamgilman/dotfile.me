import { Login } from "../../components/auth/Login";
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
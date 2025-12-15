import { LoginForm } from "@/components/login-form"
import './simple-login-form.css'

export const metadata = {
  title: 'Simple Login Form'
};

export default function Page() {
  return (
    <div className="page">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

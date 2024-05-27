import React from "react"
import "./Home.scss"
// import { LoginForm } from "molecules"
import LoginForm from "../../components/molecules/LoginForm"

const Home = () => {
  return (
    <div className="home">
      Home
      <LoginForm submitUrl="https://example.com" />
    </div>
  )
}

export default Home

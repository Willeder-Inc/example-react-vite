import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import useSWR from "swr"
import Input from "../../atoms/Input"
import { loginSchema } from "./validationSchema"
// import "../styles/LoginForm.scss";

// TODO: fix the url and refactor this with @DrashtiSabhaya

const formSubmit = (url: string) => fetch(url).then((res) => res.json())

const LoginForm: React.FC<LoginFormProps> = ({ submitUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const { error } = useSWR(formSubmit)

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const response = await fetch(submitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log("Login successful")
      // Handle successful login here
    } else {
      console.error("Login failed")
      // Handle login failure here
    }
  }

  if (error) return <div>Failed to load</div>

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Input
        label={"Username"}
        placeholder="Enter your username"
        inputProps={{
          ...register("username"),
        }}
        errorMessage={errors.username?.message || "error"}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        inputProps={{
          type: "password",
          ...register("password"),
        }}
        errorMessage={errors.password?.message}
      />
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  )
}

export default LoginForm

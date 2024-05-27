import React from "react"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div>
      root hello world
      <Outlet />
    </div>
  )
}

export default Root

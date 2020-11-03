import React from "react"
import { Link } from "gatsby"
import Logo from "../logo"

const Header = () => {
  return (
    <header className="mt-40 ">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default Header

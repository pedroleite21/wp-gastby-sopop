import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo";
import MenuHeader from "./menuheader";

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      margin: `1.45rem 0 1.45rem`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}
  >

    <div style={{
      position: `relative`,
      width: `220px`,
      height: `45px`,
    }}>
      <Link
        to="/"
      >
        <Logo />
      </Link>
    </div>


    <MenuHeader />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

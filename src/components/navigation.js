import React from "react"
// import {Link} from "gatsby"
import {Helmet} from 'react-helmet'
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    {/* <Link to="/contact">Contact</Link> */}
    <Helmet>
    <script defer src="https://kit.fontawesome.com/68499d0649.js" crossorigin="anonymous"></script>
    </Helmet>
    <a className="icon-link" href="https://twitter.com/devferx" target="__blank">
      <i className="fab fa-twitter"></i>
    </a>
    <ThemeChanger/>
  </nav>
)
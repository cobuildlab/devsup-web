import React from 'react'
import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.headerTitle}
        >
          {siteTitle}
        </Link>
      </h1>
      {
        isLoggedIn() && (
          <p
            onClick={
              () => {}
            }
            style={styles.link}
          >Sign Out</p>
        )
      }
    </div>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  }
}

export default Header

import React from "react"
import styled from "styled-components"
import "typeface-gothic-a1"
import "./reset.css"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div className="layout">{children}</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  font-family: "Gothic A1", sans-serif;
  color: #fff;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 900;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  .content-container {
    margin: 0 auto;
    width: 100%;
    max-width: 850px;
  }
`

export default Layout

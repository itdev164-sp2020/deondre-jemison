import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-Bottom: 1.45rem
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0
`

const StyledLink = styled(Link)`
  color: white;
  text-Decoration: none;
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

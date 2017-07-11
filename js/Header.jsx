import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props: { showSearch?: Boolean }) => {
	const linkr = props.showSearch ? <SearchLink>Back to search</SearchLink> : <StyledLink>Homeeee</StyledLink>

	return (
		<div>
			<HeaderName>
				<StyledLink>
					{'Notflix'}
				</StyledLink>
				{linkr}
			</HeaderName>
		</div>
	)
}

Header.defaultProps = {
	showSearch: false
}

const HeaderName = styled.h1`
	font-size: 32px;
	font-family: sans-serif;
	color: #3ec770;
`

const StyledLink = styled(Link).attrs({
	to: '/'
})`
  font-family: sans-serif;
  color: #73ffd9;
  text-decoration: none;
`

const SearchLink = StyledLink.extend.attrs({
	to: '/search'
})``

export default Header

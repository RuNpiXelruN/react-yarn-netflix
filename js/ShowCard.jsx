import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShowCard = props =>
	<StyledLink to={`/details/${props.imdbID}`}>
		<CardWrapper>
			<CardImg>
				<img alt={`${props.title}`} src={`/public/img/posters/${props.poster}`} />
			</CardImg>
			<CardText>
				<Title>
					{props.title}
				</Title>
				<h4>
					({props.year})
				</h4>
				<p>
					{props.description}
				</p>
			</CardText>
		</CardWrapper>
	</StyledLink>

ShowCard.propTypes = {
	title: string.isRequired,
	poster: string.isRequired,
	year: string.isRequired,
	description: string.isRequired,
	imdbID: string.isRequired
}

const StyledLink = styled(Link)`
	text-decoration: none;
`

const CardWrapper = styled.div`
	width: 48%;
	margin: 0 0 1%;
	color: white;
	font-family: sans-serif;
	background: #2e2b3b;
	border-radius: 3px;
	box-shadow: 0 0 3vw 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
`

const Title = styled.h3`
	color: #c79534;
	padding-bottom: 5px;
`

const CardImg = styled.div`
	width: 93%;

	& img {
		width: inherit;
	}
`
const CardText = styled.div`
	width: 96%;
	margin-right: 4%;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;

	& h4,
	p {
		font-size: 14px;
		color: #ababbb;
	}
`

export default ShowCard

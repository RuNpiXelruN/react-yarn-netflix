import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import Spinner from './Spinner'

class Details extends Component {
	state = {
		show: {},
		apiData: {}
	}
	componentDidMount() {
		axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then(res => this.setState({ apiData: res.data }))
	}
	props: {
		show: Object
	}

	render() {
		const { title, description } = this.props.show

		const rating = this.state.apiData.rating
			? <p>
					Rating = {this.state.apiData.rating}
				</p>
			: <Spinner />

		return (
			<div className="details">
				<Header showSearch />
				<DetailTitleSection>
					<Detailtitle>
						{title}
					</Detailtitle>
					<DetailRating>
						{rating}
					</DetailRating>
				</DetailTitleSection>
				<PeeTag>
					{description}
				</PeeTag>
				<StyledLink>Link here</StyledLink>
			</div>
		)
	}
}
const DetailTitleSection = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 50%;
`

const DetailRating = styled.h3.attrs({
	className: 'rating'
})`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const Detailtitle = styled.h1.attrs({
	className: 'working'
})`
	color: purple;
	font-size: 40px;
	font-family: sans-serif;
`

const PeeTag = styled.p`font-family: sans-serif;`

const StyledLink = styled(Link).attrs({
	to: '/',
	target: '_blank'
})`
  color: green;
  font-family: sans-serif;
`

export default Details

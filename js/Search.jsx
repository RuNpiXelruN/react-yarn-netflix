import React, { Component } from 'react'
import styled from 'styled-components'
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends Component {
	defaultProps = {
		shows: []
	}

	state = {
		searchTerm: ''
	}

	props: {
		shows: Array
	}

	handleSearchInputChange = e => {
		this.setState({ searchTerm: e.target.value })
	}
	render() {
		return (
			<Container>
				<SearchNav>
					<Header />
					<SearchInput
						value={this.state.searchTerm}
						onChange={this.handleSearchInputChange}
						placeholder="Enter show name..."
						type="text"
					/>
				</SearchNav>
				<ResultsWrapper>
					{this.props.shows
						.filter(
							show =>
								`${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
						)
						.map(show => <ShowCard key={show.imdbID} {...show} />)}
				</ResultsWrapper>
			</Container>
		)
	}
}

const Container = styled.div`
	width: 80%;
	margin-left: 10%;
`

const SearchInput = styled.input`width: 30%;`

const ResultsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`

const SearchNav = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

export default Search

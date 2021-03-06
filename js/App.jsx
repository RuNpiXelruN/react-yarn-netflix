import React from 'react'
import { BrowserRouter, Route, Switch, Match } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../data.json'

const fourohfour = () => <h1>404 here</h1>

const App = () =>
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
				<Route
					path="/details/:id"
					component={(props: { match: Match }) =>
						<Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} {...props} />}
				/>
				<Route component={fourohfour} />
			</Switch>
		</div>
	</BrowserRouter>

export default App

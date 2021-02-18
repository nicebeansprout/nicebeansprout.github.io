import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import Homepage from './Homepage';
import Cats from './Cats';

class App extends React.Component {
	render() {
		return (
			<div className='app-root'>
				<Router>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route exact path='/cats' component={Cats} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

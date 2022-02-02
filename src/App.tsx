import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.scss';
import Homepage from './Homepage';
import Cats from './Cats';
import Commissions from './Commissions';
import Works from './Works';

class App extends React.Component {
	render() {
		return (
			<div className='app-root'>
				<HashRouter>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route exact path='/cats' component={Cats} />
						<Route exact path='/commissions' component={Commissions} />
						<Route exact path='/works' component={Works} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
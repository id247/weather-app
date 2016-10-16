import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Loading 		from '../components/loading/Loading';
import ErrorMessage from '../components/error/ErrorMessage';
import App 			from '../components/App';
import Main 		from '../components/pages/Main';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
		</Route>
	</Router>
);

class Root extends React.Component {

	render() {		
		return (
			<Provider store={this.props.store}>		
				<div className="app">
					{routes}
					
					<Loading 
						mixClass="app__loader"
						visibleClass="loader--visible"
					/>
					
					<ErrorMessage 
						mixClass="app__error"
					/>
				</div>
			</Provider>
		);
	}
}

export default Root;


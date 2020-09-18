import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	async onSearchSubmit(term) {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID E0v4RreC7mxAuquaHxbbDK9iB2xDj0J9Zm2dDX4-wQ8',
			},
		});
		console.log(response.data.results);
	}
	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;

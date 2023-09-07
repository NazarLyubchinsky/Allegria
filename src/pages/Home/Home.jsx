import React from 'react'
import About from './About/About'
import Begin from './Begin/Begin'
import Collection from './Collection/Collection'
import Popular from './Popular/Popular'

const Home = () => {
	return (
		<>
			<Begin />
			<Collection />
			<Popular />
			<About />
		</>)
}

export default Home
import React, { Component } from 'react'
import Swappable from '../modules/swipe/Swappable'
import { Layout, CustomButton } from '../modules/common'

class TutorialScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
    	const { navigation } = this.props
    	return (
    		<Layout title="Tutorial" screen="Tutorial" navigation={navigation}>
				<CustomButton onPress={() => navigation.navigate('Auth')} text="skip" link />
				<Swappable navigate={navigation.navigate} />
				<CustomButton onPress={() => navigation.navigate('Auth')} text="next" />
    		</Layout>
    	)
	}
}

export default TutorialScreen

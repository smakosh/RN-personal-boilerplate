import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Layout } from '../modules/common'

class WelcomeScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
		const { navigation } = this.props
		return (
			<Layout title="Boilerplate" screen="Home" navigation={navigation}>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text style={{ textAlign: 'center' }}>Welcome!</Text>
				</View>
			</Layout>
		)
	}
}

export default WelcomeScreen

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { compose, branch, renderComponent } from 'recompose'
import { CustomButton, Loader, Layout } from '../modules/common'
import { logout } from '../modules/auth/actions'

class ProfileScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
    	const { navigation, auth } = this.props
    	return (
    		<Layout title="Profile" screen="Profile" back navigation={navigation}>
    			<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text style={{ textAlign: 'center' }}>Logged in succcessfully!</Text>
    				<Text style={{ marginBottom: 4, textAlign: 'center' }}>{auth.user.email}</Text>
					<CustomButton
						onPress={() => logout(navigation.navigate)}
						text="logout"
					/>
    			</View>
    		</Layout>
    	)
	}
}

const mapStateToProps = ({ auth }) => ({
	auth
})

const enhance = compose(
	connect(mapStateToProps, { logout }),
	branch(
		({ auth }) => !!auth.loading || !auth,
		renderComponent(Loader)
	)
)

export default enhance(ProfileScreen)

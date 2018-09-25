import React from 'react'
import styled from 'styled-components'
import { CustomHeader, CustomFooter } from '../../common'

const Layout = ({ navigation, title, screen, children, back }) => (
	<IphoneX>
		<CustomHeader title={title} back={back} goBack={navigation.goBack} />
		{children}
		<CustomFooter title={screen} navigate={navigation.navigate} />
	</IphoneX>
)

const IphoneX = styled.SafeAreaView`
	flex: 1;
	background-color: #fff;
`

export { Layout }

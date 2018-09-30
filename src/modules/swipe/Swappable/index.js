import React from 'react'
import Swiper from 'react-native-swiper'
import { Title } from '../../common'
import { Item, Icon, Thumbnail } from './styles'
import firstImage from '../../../assets/agree.png'

const data = [
	{
		id: 0,
		img: firstImage,
		text: 'dummy.title',
		description: 'dummy.description'
	},
	{
		id: 1,
		img: firstImage,
		text: 'dummy.title',
		description: 'dummy.description'
	},
	{
		id: 2,
		img: firstImage,
		text: 'dummy.title',
		description: 'dummy.description'
	},
	{
		id: 3,
		img: firstImage,
		text: 'dummy.title',
		description: 'dummy.description'
	},
	{
		id: 4,
		img: firstImage,
		text: 'dummy.title',
		description: 'dummy.description'
	}
]

const Swappable = () => (
	<Swiper>
		{data.map(({ id, img, text, description }) => (
			<Item key={id}>
				<Thumbnail>
					<Icon source={img} />
				</Thumbnail>
				<Title id={text} position="center" marginBottom={5} />
				<Title id={description} position="center" marginBottom={10} subtitle />
			</Item>
		))}
	</Swiper>
)


export default Swappable

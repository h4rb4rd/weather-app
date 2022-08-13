import { StatusBar, StyleSheet, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { weatherOptions } from '../utils/weather-options'

const Weather = ({ temp, condition, description }) => {
	const gradient = weatherOptions[condition]?.gradient || ['#56ccf2', '#2f80ed']
	const iconName = weatherOptions[condition]?.iconName || ''

	return (
		<LinearGradient style={styles.container} colors={gradient}>
			<StatusBar barStyle='light-content' />
			<View style={styles.container}>
				<MaterialCommunityIcons name={iconName} size={96} color='#fff' />
				<Text style={styles.temp}>{temp}&deg;</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.description}>{description}</Text>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		fontSize: 42,
		color: '#fff',
	},
	description: {
		color: '#fff',
		fontSize: 44,
		fontWeight: '300',
	},
})

export default Weather

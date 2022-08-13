import { StyleSheet, View } from 'react-native'

import Loading from './components/Loading'
import Weather from './components/Weather'
import useGetLocation from './hooks/useGetLocation'
import useGetWeather from './hooks/useGetWeather'

export default function App() {
	const { latitude, longitude, isLoading: isLocationLoading } = useGetLocation()
	const {
		temp,
		condition,
		description,
		isLoading: isWeatherLoading,
	} = useGetWeather(latitude, longitude)

	return (
		<View style={styles.container}>
			{isLocationLoading || isWeatherLoading ? (
				<Loading />
			) : (
				<Weather temp={temp} condition={condition} description={description} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

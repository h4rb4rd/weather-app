import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import * as Location from 'expo-location'

export const useGetLocation = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				setIsLoading(true)

				await Location.requestForegroundPermissionsAsync()
				const { coords } = await Location.getCurrentPositionAsync({
					accuracy: Location.Accuracy.Highest,
					maximumAge: 10000,
				})

				setLatitude(coords.latitude)
				setLongitude(coords.longitude)
			} catch (err) {
				Alert.alert('Невозможно определить местоположение', 'Очень грустно :(')
			} finally {
				setIsLoading(false)
			}
		}
		fetchLocation()
	}, [])

	return { latitude, longitude, isLoading }
}

export default useGetLocation

import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { API_KEY, BASE_URL } from '../api'

const capitalizeFirstLetter = string => {
	return string ? string[0].toUpperCase() + string.slice(1) : ''
}

const useGetWeather = (lat, long) => {
	const [isLoading, setIsLoading] = useState(false)
	const [temp, setTemp] = useState('')
	const [condition, setCondition] = useState('')
	const [description, setDescription] = useState('')

	useEffect(() => {
		if (lat && long) {
			const fetchWeather = async () => {
				try {
					setIsLoading(true)
					const res = await fetch(
						`${BASE_URL}/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
					)
					const { main, weather } = await res.json()

					const temp = Math.round(main.temp)
					const condition = weather[0].main.toLowerCase()
					const description = capitalizeFirstLetter(weather[0].description)

					setTemp(temp)
					setCondition(condition)
					setDescription(description)
				} catch (err) {
					Alert.alert('Невозможно получить погоду', 'Очень грустно :(')
				} finally {
					setIsLoading(false)
				}
			}

			fetchWeather()
		}
	}, [lat, long])

	return { temp, condition, description, isLoading }
}

export default useGetWeather

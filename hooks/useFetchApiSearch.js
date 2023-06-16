import axios from "axios";
import { useEffect, useState } from "react";
import { RAPID_API_KEY } from "../env";

const useFetchApiSearch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: { ...query },
		headers: {
			"X-RapidAPI-Key": RAPID_API_KEY,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);

			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, fetchData, isLoading, error };
};

export default useFetchApiSearch;

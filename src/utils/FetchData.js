export const exerciseOptions = {
	method: "GET",
	url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		// "X-RapidAPI-Key": "9bbdb1f8admsh7e127f368575af1p19bb4djsn2ad3ce34aab4",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const exerciseData = await response.json();
	return exerciseData;
};

import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/FetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import SearchFilterDisplay from "./SearchFilterDisplay";

const SearchExercises = ({ setExercise, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);
	const [searchData, setSearchData] = useState([]);
	let index = 0;
	var bodyPartsData = [];
	useEffect(() => {
		const fetchExercisesData = async () => {
			bodyPartsData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
				exerciseOptions
			);
			console.log(bodyPartsData);
			setSearchData(bodyPartsData);
			setBodyParts(["all", ...bodyPartsData]);
		};

		fetchExercisesData();
	}, []);

	const filterResultSelected = (val) => {
		// setSearch(bodyPart[index]);
		console.log("hell");
	};

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exerciseOptions
			);

			const searchedExercises = exercisesData.filter(
				(item) =>
					item.name.toLowerCase().includes(search) ||
					item.target.toLowerCase().includes(search) ||
					item.equipment.toLowerCase().includes(search) ||
					item.bodyPart.toLowerCase().includes(search)
			);

			window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

			setSearch("");
			setExercise(searchedExercises);
		}
	};

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
				mb="49px"
				textAlign="center"
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					height="76px"
					sx={{
						input: {
							fontWeight: "700",
							border: "none",
							borderRadius: "4px",
						},
						width: { lg: "1170px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercises"
					type="text"
					onSubmit={handleSearch}
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "173px", xs: "80px" },
						height: "56px",
						position: "absolute",
						right: "0px",
						fontSize: { lg: "20px", xs: "14px" },
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
				<Box
					justifyContent="center"
					alignItems="center"
					sx={{
						position: "absolute",
						width: { lg: "1170px", xs: "350px" },
					}}
					textAlign="center"
				>
					{searchData
						.filter((val) => {
							if (search == "") {
								return 0;
							} else if (
								val.toLowerCase().includes(search.toLowerCase())
							) {
								return val;
							}
						})
						.map((val, key) => {
							return <SearchFilterDisplay key={key} val={val} />;
						})}
				</Box>
			</Box>
			<Box
				marginTop="30px"
				sx={{ position: "relative", width: "100%", p: "20px" }}
			>
				<HorizontalScrollBar
					data={bodyParts}
					bodyParts
					setBodyPart={setBodyPart}
					bodyPart={bodyPart}
					isBodyPart={true}
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
//------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { Box, Button, TextField, Stack, Typography } from "@mui/material";
// import { exerciseOptions, FetchData } from "../utils/FetchData";
// import HorizontalScrollBar from "./HorizontalScrollBar";

// const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
// 	const [search, setSearch] = useState("");
// 	const [exercise, setExercise] = useState([]);
// 	//getting Initial catagories using bodyParts
// 	const [bodyParts, setBodyParts] = useState([]);

// 	useEffect(() => {
// 		const fetchExerciseData = async () => {
// 			const bodyPartsData = await FetchData(
// 				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
// 				exerciseOptions
// 			);
// 			setBodyParts(["all", ...bodyPartsData]);
// 			console.log(bodyPartsData);
// 		};
// 		fetchExerciseData();
// 	}, []);

// 	const handelSubmit = async () => {
// 		const exercisesData = await FetchData(
// 			"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
// 			exerciseOptions
// 		);
// 		console.log(exercisesData);
// 		const searchedExercises = exercisesData.filter(
// 			(item) => item.name || item.target || item.equipment || item.bodyPart
// 		);
// 		setSearch("");
// 		setExercise(searchedExercises);
// 		console.log(searchedExercises);
// 	};

// 	return (
// 		<Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
// 			<Typography
// 				fontWeight={700}
// 				sx={{
// 					fontSize: { lg: "44px", xs: "30px" },
// 				}}
// 				mb="50px"
// 				textAlign="center"
// 			>
// 				Find some Awsome <br /> Exercise{" "}
// 			</Typography>
// 			<Box position="relative" mb="72px">
// 				<TextField
// 					sx={{
// 						input: {
// 							borderRadius: "4px",
// 							fontWeight: "700",
// 							border: "none",
// 						},
// 						width: {
// 							lg: "1170px",
// 							xs: "350px",
// 						},
// 						backGroundColor: "#fff",
// 						borderRadius: "40px",
// 					}}
// 					value={search}
// 					onChange={(e) => {
// 						setSearch(e.target.value.toLowerCase());
// 					}}
// 					height="76px"
// 					placeholder="Search Exercise"
// 					type="text"
// 				/>
// 				<Button
// 					className="search-btn"
// 					sx={{
// 						width: {
// 							lg: "175px",
// 							xs: "80px",
// 						},
// 						bgcolor: "#FF2526",
// 						color: "#fff",
// 						textTransform: "none",
// 						fontSize: {
// 							lg: "20px",
// 							xs: "14px",
// 						},
// 						height: "56px",
// 						position: "absolute",
// 					}}
// 					onClick={handelSubmit}
// 				>
// 					Search
// 				</Button>
// 			</Box>
// 			<Box sx={{ p: "20px", position: "relative", width: "100%" }}>
// 				<HorizontalScrollBar
// 					data={bodyParts}
// 					bodyPart={bodyPart}
// 					setBodyPart={setBodyPart}
// 				/>
// 			</Box>
// 		</Stack>
// 	);
// };

// export default SearchExercises;

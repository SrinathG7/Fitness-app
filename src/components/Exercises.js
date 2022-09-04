import React, { useState, useEffect } from "react";
import { Pagination, Stack, Box, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercise, bodyPart }) => {
	// console.log(exercises);
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercisesListed = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);
	const pagination = (event, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: "1800", behavior: "smooth" });
	};

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];
			if (bodyPart === "all") {
				exercisesData = await fetchData(
					"https://exercisedb.p.rapidapi.com/exercises",
					exerciseOptions
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
			}
			setExercise(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart]);

	return (
		<Box mt="50px" p="20px" sx={{ mt: { lg: "110px" } }} id="exercises">
			<Typography variant="h3">Showing Results</Typography>
			<Stack
				justifyContent="center"
				mb="26px"
				flexWrap="wrap"
				direction="row"
				mt="22px"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
			>
				{currentExercisesListed.map((exercise, index) => (
					<ExerciseCard exercise={exercise} />
				))}
			</Stack>
			<Stack mt="20px" alignItems="center" mr="100px">
				<Pagination
					color="standard"
					count={Math.ceil(exercises.length / exercisesPerPage)}
					size="large"
					defaultPage={1}
					page={currentPage}
					onChange={pagination}
				/>
			</Stack>
		</Box>
	);
};

export default Exercises;

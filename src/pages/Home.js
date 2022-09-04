import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBannder from "../components/HeroBannder";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercise] = useState([]);

	return (
		<Box>
			<HeroBannder />
			<SearchExercises
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
				setExercise={setExercise}
			/>
			<Exercises
				bodyPart={bodyPart}
				setExercise={setExercise}
				exercises={exercises}
			/>
		</Box>
	);
};

export default Home;

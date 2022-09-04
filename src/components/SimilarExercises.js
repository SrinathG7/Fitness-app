import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
	return (
		<Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
			<Typography variant="h3" textTransform="capitalize" mb={5}>
				Exercises that target the same muscle group
			</Typography>
			<Stack sx={{ position: "relative", p: "2px" }} direction="row">
				{targetMuscleExercises.length > 0 ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>
			{/*for equipment*/}
			<Typography variant="h3" textTransform="capitalize" mb={5}>
				Exercises that uses the same equipment
			</Typography>
			<Stack sx={{ position: "relative", p: "2px" }} direction="row">
				{equipmentExercises.length > 0 ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;

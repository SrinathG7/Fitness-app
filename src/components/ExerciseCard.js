import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./ExerciseCard.css";

const ExerciseCard = ({ exercise }) => {
	return (
		<Link to={`/exercise/${exercise.id}`} className="exercise-card">
			<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
			<Stack direction="row">
				<Button
					sx={{
						ml: "21px",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
						color: "#fff",
						backgroundColor: "#ff1919",
					}}
				>
					{exercise.bodyPart}
				</Button>
				<Button
					sx={{
						ml: "21px",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
						color: "#fff",
						backgroundColor: "#fcc757",
					}}
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				ml="21px"
				fontWeight="bold"
				fontSize="24px"
				color="black"
				pb="20px"
				mt="11px"
			>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;

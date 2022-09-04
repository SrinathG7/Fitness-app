import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/FetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchExerciseDetails = async () => {
			const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearchUrl =
				"https://youtube-search-and-download.p.rapidapi.com";
			const exerciseDetailsData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailsData);
			const youtubeVideosDetailsData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
				youtubeOptions
			);
			setExerciseVideos(youtubeVideosDetailsData.contents);

			const targetMuscleExercisesData = await fetchData(
				`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
				exerciseOptions
			);
			setTargetMuscleExercises(targetMuscleExercisesData);
			const equipmentExercisesData = await fetchData(
				`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
				exerciseOptions
			);
			setEquipmentExercises(equipmentExercisesData);
		};

		fetchExerciseDetails();
	}, [id]);
	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				exerciseName={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExercises={targetMuscleExercises}
				equipmentExercises={equipmentExercises}
			/>
		</Box>
	);
};

export default ExerciseDetails;

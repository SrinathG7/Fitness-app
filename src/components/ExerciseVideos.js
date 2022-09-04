import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, exerciseName }) => {
	return (
		<Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
			<Typography variant="h3" mb="33px">
				Watch{" "}
				<span style={{ color: "#ff2625", textTransform: "capitalize" }}>
					{" "}
					{exerciseName}
				</span>{" "}
				exercise videos
			</Typography>
			<Stack
				justifyContent="flex-start"
				alignItems="center"
				flexWrap="wrap"
				sx={{
					flexDirection: { lg: "row" },
					gap: { lg: "20px", xs: "0px" },
				}}
			>
				{exerciseVideos?.slice(0, 6).map((item, index) => (
					<a
						className="exercise-video"
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target="_blank"
						key={index}
						rel="noreferrer"
					>
						<img
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
						/>
						<Typography variant="h5" color="#000">
							{item.video.title}
						</Typography>
						<Typography variant="h6" color="#000">
							{item.video.channelName}
						</Typography>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;

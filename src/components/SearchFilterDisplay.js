import React from "react";
import { Box, Typography } from "@mui/material";

const SearchFilterDisplay = ({ key, val, filterResultSelected }) => {
	const filterResultHandler = () => {
		console.log("HeHe");
	};
	return (
		<Box key={key} onClick={filterResultHandler}>
			<Typography
				sx={{
					fontSize: { lg: "20px", xs: "16px" },
					padding: { lg: "17px", xs: "13px" },
					backgroundColor: "#FF4500",
					"&:hover": {
						backgroundColor: "#FF4500",
						opacity: [0.9, 0.8, 0.7],
					},
				}}
				fontWeight="bold"
				textTransform="capitalize"
			>
				{val}
			</Typography>
		</Box>
	);
};

export default SearchFilterDisplay;

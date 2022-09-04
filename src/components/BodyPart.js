import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item ? "2px solid #FF2526" : "",
				background: "#fff",
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "280px",
				cursor: "pointer",
				gap: "47px",
			}}
			onClick={() => {
				setBodyPart(item);
				window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
			}}
		>
			<img src={icon} style={{ height: "40px", width: "40px" }} />
			<Typography
				fontWeight="bold"
				fontSize="24px"
				textTransform="capitalize"
			>
				{item}
			</Typography>
		</Stack>
	);
};

export default BodyPart;

import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
	const { bodyPart, target, name, equipment, gifUrl } = exerciseDetail;
	const extraDetails = [
		{
			name: bodyPart,
			icon: BodyPartImage,
		},
		{
			name: equipment,
			icon: EquipmentImage,
		},
		{
			name: target,
			icon: TargetImage,
		},
	];
	return (
		<Stack
			gap="60px"
			sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
		>
			<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
			<Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
				<Typography variant="h4" textTransform="capitalize">
					{name}
				</Typography>
				<Typography variant="h6">
					Exercises keep you strong. {name} bup is one of the best
					exercises to target your {target}. It will help you improve your
					mood and gain energy.
				</Typography>
				{extraDetails.map((item) => (
					<Stack
						key={item.name}
						gap="24px"
						direction="row"
						alignItems="center"
					>
						<Button
							sx={{
								backgroundColor: "#fff2db",
								width: "100px",
								height: "100px",
								borderRadius: "50%",
							}}
						>
							<img
								src={item.icon}
								alt={item.name}
								loading="lazy"
								style={{ height: "50px", width: "50px" }}
							/>
						</Button>
						<Typography variant="h5" textTransform="capitalize">
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Detail;

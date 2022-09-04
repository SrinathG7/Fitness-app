import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";

const NavBar = () => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-around"
			sx={{
				gap: { sm: "122px", xs: "40px" },
				mt: { sm: "32px", xs: "20px" },
				justifyContent: "none",
			}}
		>
			<Link to="/">
				<img
					src={logo}
					alt="Logo"
					style={{ width: "40px", height: "40px", margin: "0px 20px" }}
				/>
			</Link>
			<Stack
				direction="row"
				alignItems="flex-end"
				fontSize="24px"
				gap="40px"
			>
				<Link
					to="/"
					style={{
						textDecoration: "none",
						color: "#3A1212",
						borderBottom: "2px solid #FF2625",
					}}
				>
					Home
				</Link>
				<a
					href="#exercises"
					style={{ textDecoration: "none", color: "#3A1212" }}
				>
					Exercise
				</a>
			</Stack>
		</Stack>
	);
};

export default NavBar;

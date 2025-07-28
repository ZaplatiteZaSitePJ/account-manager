import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonFilled = styled(Button)<ButtonProps>(() => ({
	backgroundColor: "var(--black-color)",
	color: "white",
	width: "fit-content",
	fontSize: "var(--normal-font-size)",
	fontWeight: "bold",
	borderRadius: "0.5rem",
	border: "0.2rem solid var(--black-color)",
	padding: "0.2rem 1rem",
	textTransform: "lowercase",
	transition: "ease 0.2s",
	"&:hover": {
		letterSpacing: "0.15rem",
	},
}));

export default ButtonFilled;

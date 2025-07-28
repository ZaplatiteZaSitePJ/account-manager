import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonText = styled(Button)<ButtonProps>(() => ({
	backgroundColor: "transparent",
	width: "fit-content",
	color: "var(--grey-color)",
	padding: "0 0",
	fontSize: "var(--normal-font-size)",
	fontWeight: "bold",
	textTransform: "lowercase",
	transition: "ease 0.2s",
	"&:hover": {
		letterSpacing: "0.15rem",
		color: "var(--black-color)",
	},
}));

export default ButtonText;

import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const BirthdayField: FC<InputProps> = ({ register, subContent }) => {
	return (
		<Input
			label="день рождения"
			variant="standard"
			register={register}
			fullWidth
			type="date"
			sx={{
				"& label": {
					transform: "translate(0px, -9px) scale(1)",
					transformOrigin: "top left",
					fontSize: "14px",
				},
				"& .MuiInputLabel-shrink": {
					transform: "translate(0px, -9px) scale(1)",
					fontSize: "14px",
					color: "var(--light-grey-color)",
				},

				color: "var(--light-grey-color) !importnant",
				"& .MuiInputBase-input": {
					marginTop: "8px",
					color: "var(--light-grey-color)",
				},
			}}
			subContent={subContent}
		/>
	);
};

export default BirthdayField;

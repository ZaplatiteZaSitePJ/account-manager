import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const SurNameField: FC<InputProps> = ({ register, sx, subContent }) => {
	return (
		<Input
			label="фамилия"
			variant="outlined"
			register={register}
			fullWidth
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default SurNameField;

import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const EmailField: FC<InputProps> = ({ register, sx, subContent, isAvailable }) => {
	return (
		<Input
			label="почта"
			variant="outlined"
			register={register}
			fullWidth
			type="email"
			isAvailable={isAvailable}
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default EmailField;

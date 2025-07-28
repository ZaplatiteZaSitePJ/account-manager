import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const PasswordField: FC<InputProps> = ({ register, sx, subContent, label }) => {
	return (
		<Input
			label={label ? label : "пароль"}
			variant="outlined"
			register={register}
			fullWidth
			type="password"
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default PasswordField;

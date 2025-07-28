import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const PhoneField: FC<InputProps> = ({ register, sx, subContent }) => {
	return (
		<Input
			label="телефон"
			variant="outlined"
			register={register}
			fullWidth
			type="tel"
			sx={sx}
			subContent={subContent}
		/>
	);
};

export default PhoneField;

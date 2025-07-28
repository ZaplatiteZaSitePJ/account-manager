import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import type { FC } from "react";

type Props = InputProps & {
	defaultValue?: string | undefined;
	value?: string;
	onChange?: (value: string) => void;
};

const options = [
	{ en: "Engineer", ru: "Инженер" },
	{ en: "Developer", ru: "Разработчик" },
	{ en: "Designer", ru: "Дизайнер" },
	{ en: "Analyst", ru: "Аналитик" },
	{ en: "Consultant", ru: "Консультант" },
	{ en: "Accountant", ru: "Бухгалтер" },
	{ en: "Marketer", ru: "Маркетолог" },
	{ en: "HR", ru: "HR-специалист" },
];

const EmploymentSelect: FC<Props> = ({
	sx,
	value,
	defaultValue,
	register,
	subContent,
}) => {
	return (
		<FormControl sx={sx}>
			<InputLabel
				id="employment-label-id"
				sx={{
					color: "var(--light-grey-color)",
					"&.Mui-focused": {
						color: "var(--light-grey-color)",
					},
				}}
			>
				Должность
			</InputLabel>
			<Select
				label="employment"
				labelId="employment-label-id"
				value={value}
				defaultValue={defaultValue}
				{...register}
				sx={{
					width: "300px",
					backgroundColor: "transparent",
					color: "var(--light-grey-color)",
					"& .MuiOutlinedInput-notchedOutline": {
						border: "3px solid",
						borderRadius: "6px",
						borderColor: "var(--light-grey-color)",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "var(--light-grey-color)",
						transform: "scale(1.02)",
						transition: "transform 0.3s ease",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						border: "3px solid",
						borderColor: "var(--light-grey-color)",
					},
				}}
			>
				{options.map((employment) => (
					<MenuItem value={employment.ru}>{employment.ru}</MenuItem>
				))}
			</Select>
			{subContent}
		</FormControl>
	);
};

export default EmploymentSelect;

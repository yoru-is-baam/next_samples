import InputDate from "@/components/atoms/InputDate/InputDate";

import styles from "@/components/templates/HomeTemplate/HomeTemplate.module.scss";
import { convertStringToDate } from "@/utils/convertUtils";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
	date: string;
};

export default function HomeTemplate() {
	const { control } = useForm<FormValues>();

	return (
		<div className={styles.container}>
			<Controller
				name="date"
				control={control}
				render={({ field: { value, onChange } }) => (
					<InputDate
						onChange={onChange}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const inputDateValue = (e.target as HTMLInputElement).value;
								if (inputDateValue && !Date.parse(inputDateValue)) {
									onChange(new Date());
								}
							}
						}}
						selected={convertStringToDate(value)}
					/>
				)}
			/>
		</div>
	);
}

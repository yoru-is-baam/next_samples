import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputDateProps = {
	selected: Date | null;
	onChange: (date: Date | null) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export default function InputDate({
	selected,
	onChange,
	onKeyDown,
}: InputDateProps) {
	return (
		<DatePicker
			showTimeSelect
			selected={selected}
			onChange={onChange}
			onKeyDown={onKeyDown}
			timeIntervals={60}
			timeFormat="HH:mm"
			dateFormat="yyyy/MM/dd HH:mm"
		/>
	);
}

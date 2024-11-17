export const convertStringToDate = (value: string): Date | null => {
	if (!value) {
		return null;
	}

	return new Date(value);
};

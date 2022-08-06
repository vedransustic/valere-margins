export const removeFavoriteMovie: any = (array: any[], id: any) => {
	const newArray = array.filter((x) => x.id !== id);
	return newArray;
};

export const newId = () => {
	const uuid = crypto.randomUUID();
	const hex = uuid.replace(/-/g, '');

	return BigInt(`0x${hex}`).toString(36);
};

const updateCb =
	(id: ID, data: Partial<TransactionData>) => (t: Transaction) => {
		if (t.id !== id) {
			return t;
		}
		return { ...t, ...data };
	};

export const updateTxn =
	(id: ID, data: Partial<TransactionData>) => (ts: Transaction[]) =>
		ts.map(updateCb(id, data));

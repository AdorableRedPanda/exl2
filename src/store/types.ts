export interface TransactionsActions {
	add: (t: TransactionData) => void;
	addMany: (ts: TransactionData[]) => void;
	delete: (id: ID) => void;
	update: (t: TransactionData, id: ID) => void;
}

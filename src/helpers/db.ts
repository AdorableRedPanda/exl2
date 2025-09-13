const DB_NAME = import.meta.env.VITE_DB_NAME;
const DB_VERSION = Number.parseInt(import.meta.env.VITE_DB_VERSION);
const STORE_NAME = import.meta.env.VITE_STORE_NAME;

let dbClient: IDBDatabase;

function openDB(): Promise<IDBDatabase> {
	if (dbClient) {
		return Promise.resolve(dbClient);
	}

	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);

		request.onupgradeneeded = () => {
			const database = request.result;
			if (!database.objectStoreNames.contains(STORE_NAME)) {
				const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' });
				store.createIndex('by_date', 'date');
			}
		};

		request.onsuccess = () => {
			dbClient = request.result;
			resolve(dbClient);
		};

		request.onerror = () => reject(request.error);
	});
}

export async function getAll(): Promise<Transaction[]> {
	const database = await openDB();
	return new Promise((resolve, reject) => {
		const tx = database.transaction(STORE_NAME, 'readonly');
		const store = tx.objectStore(STORE_NAME);
		const index = store.index('by_date');
		const result: Transaction[] = [];

		const request = index.openCursor(null, 'prev');
		request.onsuccess = () => {
			const cursor = request.result;
			if (cursor) {
				result.push(cursor.value);
				cursor.continue();
			} else {
				resolve(result);
			}
		};
		request.onerror = () => reject(request.error);
	});
}

export async function add(t: Transaction): Promise<Transaction> {
	const database = await openDB();

	return new Promise((resolve, reject) => {
		const tx = database.transaction(STORE_NAME, 'readwrite');
		const store = tx.objectStore(STORE_NAME);
		const request = store.add(t);

		request.onsuccess = () => resolve(t);
		request.onerror = () => reject(request.error);
	});
}

export async function deleteTx(id: ID): Promise<void> {
	const database = await openDB();

	return new Promise((resolve, reject) => {
		const tx = database.transaction(STORE_NAME, 'readwrite');
		const store = tx.objectStore(STORE_NAME);
		const request = store.delete(id);

		request.onsuccess = () => resolve();
		request.onerror = () => reject(request.error);
	});
}

export async function addMany(
	transactions: Transaction[]
): Promise<Transaction[]> {
	const database = await openDB();

	return new Promise((resolve, reject) => {
		const tx = database.transaction(STORE_NAME, 'readwrite');
		const store = tx.objectStore(STORE_NAME);

		for (const t of transactions) {
			store.add(t);
		}

		tx.oncomplete = () => resolve(transactions);
		tx.onerror = () => reject(tx.error);
	});
}

export async function update(transaction: Transaction): Promise<Transaction> {
	const database = await openDB();

	return new Promise((resolve, reject) => {
		const tx = database.transaction(STORE_NAME, 'readwrite');
		const store = tx.objectStore(STORE_NAME);
		const request = store.put(transaction);

		request.onsuccess = () => resolve(transaction);
		request.onerror = () => reject(request.error);
	});
}

export const DbClient = {
	add,
	delete: deleteTx,
	getAll,
	addMany,
	update
};

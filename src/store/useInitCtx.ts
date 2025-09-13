import { writable } from 'svelte/store';
import { onMount, setContext } from 'svelte';
import { DbClient, DbClient as db, newId } from '@/helpers';
import type { StoreCtx, TransactionsActions } from './types';
import { filterOther, updateTxn } from '@/utils';
import { LIST_ACTIONS, LIST_STATE } from './constants';

const buildTxn = (d: TransactionData) => ({ ...d, id: newId() });

export const useInitCtx = () => {
	const store = writable<Transaction[]>([]);

	onMount(async () => DbClient.getAll().then((res) => store.set(res)));

	const add = async (t: TransactionData) => {
		await db.add(buildTxn(t));
		await db.getAll().then(store.set);
	};

	const _delete = (id: ID) =>
		db.delete(id).then(() => store.update(filterOther(id)));

	const update = (t: TransactionData, id: ID) =>
		db.update({ ...t, id }).then(() => store.update(updateTxn(id, t)));

	const addMany = async (payload: TransactionData[]) => {
		const items = payload.map(buildTxn);
		await db.addMany(items);
		await db.getAll().then(store.set);
	};

	setContext<TransactionsActions>(LIST_ACTIONS, {
		addMany,
		add,
		delete: _delete,
		update
	});
	setContext<StoreCtx>(LIST_STATE, store);
};

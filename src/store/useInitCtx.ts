import { writable } from 'svelte/store';
import { onMount, setContext } from 'svelte';
import { DbClient, DbClient as db } from '@/helpers';
import type { StoreCtx, TransactionsActions } from './types';
import { filterOther, updateTxn, buildTxn } from '@/utils';
import { LIST_ACTIONS, LIST_STATE } from './constants';

export const useInitCtx = () => {
	const store = writable<Transaction[]>([]);

	onMount(async () => DbClient.getAll().then((res) => store.set(res)));

	const add = async (t: TransactionData) => {
		const transaction = buildTxn(t);
		await db.add(transaction);
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

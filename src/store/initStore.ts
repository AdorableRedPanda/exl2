import { writable } from 'svelte/store';
import { onMount } from 'svelte';
import { DbClient } from '@/helpers';

export const initStore = () => {
	const store = writable<Transaction[]>([]);

	onMount(async () => DbClient.getAll().then((res) => store.set(res)));

	return store;
};

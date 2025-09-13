import { derived } from 'svelte/store';
import { buildSummary } from '@/utils';

import { buildMonthGroups } from '@/utils';
import { getContext } from 'svelte';
import type { StoreCtx } from '@/store/types';
import { LIST_STATE } from '@/store/constants';

export const selectStore = () => getContext<StoreCtx>(LIST_STATE);

export const selectMonthGroups = () => {
	const store = selectStore();

	return derived(store, ($store) => buildMonthGroups($store));
};

export const selectMonthSummaries = () => {
	const store = selectMonthGroups();

	return derived(store, ($store) => $store.map(buildSummary).toReversed());
};

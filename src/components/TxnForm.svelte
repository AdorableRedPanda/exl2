<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { buildTxnData } from '@/helpers';
	import TxnTypeInput from '@/components/TxnTypeInput.svelte';
	import { Labeled } from '$lib/components/ui/labeled';

	export let onSubmit: (txn: TransactionData) => void = () => {};
	export let onClose: () => void = () => {};

	let data = buildTxnData({});

	const handleSubmit = () => {
		onSubmit(data);
		data = buildTxnData({});
	};
</script>

<form
	on:reset={onClose}
	on:submit|preventDefault={handleSubmit}
	class="py-2 px-4 space-y-3 grid-cols-2"
>
	<TxnTypeInput type={data.type} />
	<div class="grid grid-cols-[2fr_5fr] gap-3">
		<Labeled htmlFor="amount" label="Amount">
			<Input min="1" id="amount" type="number" bind:value={data.amount} required />
		</Labeled>
		<Labeled htmlFor="date" label="Date">
			<Input type="datetime-local" id="date" name="meeting-time" bind:value={data.date} required />
		</Labeled>
	</div>
	<Labeled htmlFor="comment" label="Comment">
		<Input id="comment" type="text" bind:value={data.comment} />
	</Labeled>

	<div class="w-full flex gap-2 justify-end">
		<Button type="reset" variant="secondary">Close</Button>
		<Button type="submit">Create</Button>
	</div>
</form>

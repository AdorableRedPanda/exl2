<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { buildTxnData } from '@/helpers';
	import TxnTypeInput from '@/components/TxnTypeInput.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';

	export const onSubmit: (txn: TransactionData) => void = () => {};

	let data = buildTxnData({});

	const handleSubmit = () => {
		onSubmit(data);
		data = buildTxnData({});
	};
</script>

<Card class="w-full h-fit p-1">
	<CardContent class="flex flex-col justify-between p-1">
		<form on:submit|preventDefault={handleSubmit} class="p-2 space-y-4 grid-cols-2">
			<TxnTypeInput type={data.type} />
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-2">
					<Label for="amount">Amount</Label>
					<Input id="amount" type="number" bind:value={data.amount} required />
				</div>
				<div class="space-y-2">
					<Label for="date">Date</Label>
					<Input id="date" type="date" bind:value={data.date} required />
				</div>
			</div>

			<div class="space-y-2">
				<Label for="comment">Comment</Label>
				<Input id="comment" type="text" bind:value={data.comment} />
			</div>

			<Button type="submit" class="w-full text-base">Add new</Button>
		</form>
	</CardContent>
</Card>

<script lang="ts">
	import { Label } from '../label';
	export let label = '';
	export let htmlFor = '';
</script>

<div class="flex w-full flex-col gap-1">
	<Label for={htmlFor}>{label}</Label>
	<slot />
</div>

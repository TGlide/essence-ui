<script lang="ts">
	import { cn } from '$lib/helpers/style';
	import { createCollapsible } from '@melt-ui/svelte';

	import Content from './disclosure-content.svelte';
	import Trigger from './disclosure-trigger.svelte';
	import { createEventDispatcher } from 'svelte';
	import { ctx } from '.';

	export let disabled = false;
	export let defaultOpen = false;
	export let unstyled = false;
	export let open = defaultOpen;
	let className: string | undefined | null = undefined;
	export { className as class };

	const dispatch = createEventDispatcher<{
		change: boolean;
	}>();

	const disclosure = createCollapsible({
		disabled,
		defaultOpen: open,
		onOpenChange: ({ next }) => {
			open = next;
			dispatch('change', next);
			return next;
		}
	});

	ctx.set({ ...disclosure, unstyled });

	const {
		elements: { root },
		states: { open: openStore }
	} = disclosure;
</script>

<slot name="asChild" {Trigger} {Content} open={$openStore} builder={$root}>
	<div class={cn('group', className)} use:root {...$root}>
		<slot {Trigger} {Content} open={$openStore} />
	</div>
</slot>

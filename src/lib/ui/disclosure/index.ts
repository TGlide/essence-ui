export { default as Disclosure } from './disclosure-root.svelte';

import type { Collapsible } from '@melt-ui/svelte';
import { getContext as _getContext, setContext as _setContext } from 'svelte';

function createNamedContext<Ctx>(name: string) {
	return {
		get: () => _getContext<Ctx>(name),
		set: (ctx: Ctx) => _setContext(name, ctx)
	};
}

type Context = Collapsible & {
	unstyled?: boolean;
};

export const ctx = createNamedContext<Context>('disclosure');

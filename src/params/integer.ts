import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string) => {
    const validInteger = /^[0-9]{1,11}$/;
    return validInteger.test(param);
}) satisfies ParamMatcher;
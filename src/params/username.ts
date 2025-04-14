import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string) => {
    const validTwitchName = /^[a-zA-Z0-9]{3,25}$/;
    return validTwitchName.test(param);
}) satisfies ParamMatcher;
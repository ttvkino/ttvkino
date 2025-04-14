import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string) => {
    let url;
    try {
        url = new URL(decodeURIComponent(param));
    } catch (_) {
        return false;  
    } 
    return url.protocol === "http:" || url.protocol === "https:";
}) satisfies ParamMatcher;
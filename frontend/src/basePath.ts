// The app can be served under a sub-path, set at build time with VITE_BASE_PATH (e.g. /wordslayer/).
// Paths to the backend and to public files go through withBase; the default base is "/".
const BASE = import.meta.env.BASE_URL; // always ends with "/"

export const withBase = (path: string) => BASE + path.replace(/^\//, "");

// "/wordslayer", not "/wordslayer/", so that both forms of the URL match.
export const routerBasename = BASE.replace(/\/$/, "") || "/";

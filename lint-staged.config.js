const jsLikeExtensions = "ts,tsx,mts,cts,js,jsx,cjs,mjs,json";

export default {
  [`*.{${jsLikeExtensions}}`]: "eslint --max-warnings 0 --fix",
};

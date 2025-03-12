import { src, dest } from "gulp";

import { distPath, paths } from "../config/paths.js";

export const media = () => {
	return (
		src(paths.media, { encoding: false })
			//
			.pipe(dest(`${distPath}/media/`))
	);
};

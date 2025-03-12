import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";

export const fonts = () => {
	return (
		src(paths.fonts, { encoding: false })
			//
			.pipe(dest(`${distPath}/fonts/`))
	);
};

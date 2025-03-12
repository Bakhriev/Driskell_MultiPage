import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";

export const icons = async () => {
	return (
		src(paths.icons)
			//
			.pipe(dest(`${distPath}/images/icons/`))
	);
};

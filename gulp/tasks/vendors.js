import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";

export const vendors = () => {
	return (
		src(paths.vendors)
			//
			.pipe(dest(`${distPath}/vendors/`))
	);
};

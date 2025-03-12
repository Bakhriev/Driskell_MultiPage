import browserSync from "browser-sync";

import { distPath } from "../config/paths.js";

export const serve = () => {
	browserSync.init({
		server: {
			baseDir: distPath,
		},
	});
};

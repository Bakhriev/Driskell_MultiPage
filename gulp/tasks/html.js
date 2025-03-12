import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

const isBuild = process.env.NODE_ENV?.replace(" ", "") === "build";

// gulp-file-include
export const html = async () => {
	const fileInclude = (await import("gulp-file-include")).default;
	const htmlMin = (await import("gulp-htmlmin")).default;
	const gulpIf = (await import("gulp-if")).default;

	return (
		src(paths.html)
			.pipe(
				fileInclude({
					prefix: "@",
					basepath: "@file",
				})
			)
			.pipe(
				gulpIf(
					isBuild,
					htmlMin({ collapseWhitespace: true, removeComments: true })
				)
			)
			//
			.pipe(dest(distPath))
			//
			.pipe(browserSync.stream())
	);
};

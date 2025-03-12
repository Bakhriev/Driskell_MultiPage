import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

const isBuild = process.env.NODE_ENV?.replace(" ", "") === "build";

export const scripts = async () => {
	const plumber = (await import("gulp-plumber")).default;
	const gulpIf = (await import("gulp-if")).default;
	const uglify = (await import("gulp-uglify")).default;

	return (
		src(paths.scripts)
			.pipe(plumber())
			//
			.pipe(gulpIf(isBuild, uglify()))
			//
			.pipe(dest(`${distPath}/js/`))
			//
			.pipe(browserSync.stream())
	);
};

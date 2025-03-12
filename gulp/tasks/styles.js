import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";

import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);
const isBuild = process.env.NODE_ENV?.replace(" ", "") === "build";

export const styles = async () => {
	const plumber = (await import("gulp-plumber")).default;
	const gcmq = (await import("gulp-group-css-media-queries")).default;
	const cleanCss = (await import("gulp-clean-css")).default;
	const gulpIf = (await import("gulp-if")).default;

	return (
		src(paths.styles)
			.pipe(plumber())
			//
			.pipe(sass().on("error", sass.logError))
			//
			.pipe(autoprefixer({ cascade: false }))
			//
			.pipe(gcmq())
			//
			.pipe(gulpIf(isBuild, cleanCss()))
			//
			.pipe(dest(`${distPath}/css/`))
			//
			.pipe(browserSync.stream())
	);
};

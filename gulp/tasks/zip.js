import { dest, src } from "gulp";
import zip from "gulp-zip";

export const zipProject = () => {
	return (
		src("./dist/**/*")
			//
			.pipe(zip("dist.zip"))
			//
			.pipe(dest("./"))
	);
};

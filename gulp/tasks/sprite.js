import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";

export const sprite = async () => {
	const svgSprite = (await import("gulp-svg-sprite")).default;

	return src(paths.sprite)
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						sprite: "../sprite.svg",
					},
				},
			})
		)
		.pipe(dest(`${distPath}/images/sprite/`));
};

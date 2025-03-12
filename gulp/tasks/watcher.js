import { watch } from "gulp";
import { paths } from "../config/paths.js";

import {
	html,
	styles,
	scripts,
	media,
	images,
	icons,
	sprite,
	vendors,
	fonts,
} from "./index.js";

export const watcher = () => {
	watch(paths.html, html);
	watch("./src/html/**/*.html", html);
	watch(paths.styles, styles);
	watch(paths.scripts, scripts);
	watch(paths.media, media);
	watch(paths.images, images);
	watch(paths.icons, icons);
	watch(paths.sprite, sprite);
	watch(paths.vendors, vendors);
	watch(paths.fonts, fonts);
};

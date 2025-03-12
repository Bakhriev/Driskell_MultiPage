// Imports
import { parallel, series } from "gulp";

// Tasks
import {
	html,
	styles,
	scripts,
	del,
	watcher,
	serve,
	media,
	images,
	icons,
	sprite,
	vendors,
	fonts,
	zipProject,
} from "./gulp/tasks/index.js";

const dev = series(
	del,
	html,
	styles,
	parallel(
		scripts,
		media,
		images,
		icons,
		sprite,
		vendors,
		fonts,
		watcher,
		serve
	)
);

const build = series(
	del,
	html,
	styles,
	scripts,
	media,
	images,
	icons,
	sprite,
	vendors,
	fonts
);

const preview = serve;
const zip = zipProject;

export { dev };
export { build };
export { preview };
export { zip };

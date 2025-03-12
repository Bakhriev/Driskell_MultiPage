import { deleteAsync } from "del";

import { distPath } from "../config/paths.js";

export const del = () => {
	return deleteAsync(distPath);
};

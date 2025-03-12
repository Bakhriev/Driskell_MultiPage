export const focusTrap = (parent, withArrows = false) => {
	if (!parent) return;

	const selectors =
		"a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])";

	const getFocusableElements = () => {
		return [...parent.querySelectorAll(selectors)].filter(
			el =>
				!el.disabled &&
				el.offsetParent !== null &&
				getComputedStyle(el).visibility !== "hidden"
		);
	};

	const focusableElements = getFocusableElements();
	if (focusableElements.length === 0) return;

	let currentIndex = 0;
	focusableElements[currentIndex].focus();

	parent.addEventListener("keydown", e => {
		if (!withArrows) {
			if (e.key === "Tab") {
				if (e.shiftKey) {
					// Shift + Tab
					if (document.activeElement === focusableElements[0]) {
						e.preventDefault();
						focusableElements[focusableElements.length - 1].focus();
					}
				} else {
					// Tab
					if (
						document.activeElement ===
						focusableElements[focusableElements.length - 1]
					) {
						e.preventDefault();
						focusableElements[0].focus();
					}
				}
			}
		} else {
			// Если withArrows включен, блокируем Tab
			if (e.key === "Tab") {
				e.preventDefault();
			}

			if (e.key === "ArrowDown") {
				e.preventDefault();
				if (currentIndex < focusableElements.length - 1) {
					currentIndex++;
					focusableElements[currentIndex].focus();
				}
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				if (currentIndex > 0) {
					currentIndex--;
					focusableElements[currentIndex].focus();
				}
			}
		}
	});
};

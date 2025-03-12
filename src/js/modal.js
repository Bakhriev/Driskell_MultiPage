import { focusTrap } from "./focusTrap.js";

export function initModal(modalSelector, triggersSelector) {
	const modal = document.querySelector(modalSelector);
	const triggers = document.querySelectorAll(triggersSelector);

	// For focus on leave
	let entryElement = null;

	if (!modal || !triggers.length) return;

	const destroyer = modal.querySelector("[data-destroyer]");

	function show() {
		modal.classList.add("show");
		entryElement = document.activeElement;

		focusTrap(modal, true);

		window.addEventListener("keydown", onPressEscape);
	}

	function hide() {
		modal.classList.remove("show");

		entryElement.focus();
		window.removeEventListener("keydown", onPressEscape);
	}

	function onPressEscape(e) {
		if (e.key === "Escape") hide();
	}

	function init() {
		destroyer?.addEventListener("click", hide);

		modal.addEventListener("click", e => {
			if (e.target === modal) hide();
		});

		triggers.forEach(trigger => {
			trigger.addEventListener("click", show);
		});
	}

	init();

	return { show, hide };
}

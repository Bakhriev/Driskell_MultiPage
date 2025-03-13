import { initModal } from "./modal.js";
import { focusTrap } from "./focusTrap.js";

const initCatalogMenu = triggerSelector => {
	const catalogMenu = document.querySelector(".catalog-menu");
	const catalogTrigger = document.querySelector(triggerSelector);

	if (!catalogMenu | !catalogTrigger) return;

	const buttons = catalogMenu.querySelectorAll(".catalog-menu__btn");
	const panels = catalogMenu.querySelectorAll(".catalog-menu__panel");

	const toggleVisible = index => {
		buttons.forEach(btn => btn.classList.remove("active"));
		buttons[index].classList.add("active");

		panels.forEach(panel => panel.classList.remove("active"));
		panels[index].classList.add("active");
	};

	buttons.forEach(btn => {
		btn.addEventListener("click", () => {
			toggleVisible(btn.dataset.tab);
			focusTrap(catalogMenu);
		});
	});

	catalogTrigger.addEventListener("click", () => {
		if (catalogMenu.classList.contains("active")) {
			catalogMenu.classList.remove("active");
			catalogTrigger.focus();
		} else {
			catalogMenu.classList.add("active");
			focusTrap(catalogMenu);
		}
	});

	catalogMenu.addEventListener("keydown", e => {
		if (e.key === "Escape") {
			catalogMenu.classList.remove("active");
			catalogTrigger.focus();
		}
	});
};

initCatalogMenu("[data-trigger='catalog-menu']");

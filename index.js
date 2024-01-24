let open_cross = document.querySelector(".nav_bar_link");
let close_cross = document.querySelector(".crossmarked");
let changer = document.querySelector(".nav_bar_link_changer");

changer.classList.add(".hidden");
// console.log("hidden");
open_cross.addEventListener("click", () => {
	if (changer.classList.contains("hidden")) {
		changer.classList.remove("hidden");
	}
	if (!changer.classList.contains("active")) {
		changer.classList.add("active");
	}
	// changer.classList.add("active");
	console.log("added");
	console.log(changer.classList);
});
close_cross.addEventListener("click", () => {
	if (changer.classList.contains("active")) {
		changer.classList.remove("active");
	}
	if (!changer.classList.contains("hidden")) {
		changer.classList.add("hidden");
	}
	changer.classList.add("hidden");
	console.log("hidden");
	console.log(changer.classList);
});

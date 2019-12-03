function expandRecommendedUseSection() {
	document.getElementById("js-toggle-d-none").classList.remove("d-none");	
	document.getElementById("js-show-recommended-use").classList.add("d-none");	
	document.getElementById("js-hide-recommended-use").classList.remove("d-none");	
}

function collapseRecommendedUseSection() {
	document.getElementById("js-toggle-d-none").classList.add("d-none");
	document.getElementById("js-show-recommended-use").classList.remove("d-none");
	document.getElementById("js-hide-recommended-use").classList.add("d-none");
}

document.getElementById("js-show-recommended-use").addEventListener("click", expandRecommendedUseSection);
document.getElementById("js-hide-recommended-use").addEventListener("click", collapseRecommendedUseSection);

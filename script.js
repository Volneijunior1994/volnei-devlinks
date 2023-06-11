function toggleMode() {
	const html = document.documentElement
	html.classList.toggle("light")

	//pegar a tag img
	const img = document.querySelector("#profile img")

	// substituir a imagem
	if (html.classList.contains("light")) {
		//se tiver light mode, usar imagem light
		img.setAttribute("src", "/assets/3x4.jpg")
	} else {
		//se tiver normal mode, usar imagem normal
		img.setAttribute("src", "/assets/avatar.png")
	}
}

// Le conteneur parent des lettres à animer pour le titre
const titreQuiz = document.querySelector("main")

// On place le mot "QUIZ" lettre par lettre (un div pour chaque lettre) dans l'interface
for (const lettre of "QUIZ") {
	const elt = document.createElement("span");
	elt.innerText = lettre;
	elt.classList.add("lettre");
	elt.style.animationDelay = Math.random()*2 + "s";

	titreQuiz.append(elt);
}

// On récupère le bouton dans le pied de page et on lui attribue un gestionnaire d'événement


// Retirer l'intro...
function enleverTitreIntro(evt) {
	//On enlève toutes les lettres du titre
	//Tant qu'il y a une lettre dans le conteneur, on retire la première...

	//On enlève la classe sur l'élément 'main' qui contient les lettres

	//On enlève également le bouton dans le pied de page et son gestionnaire d'événement

}

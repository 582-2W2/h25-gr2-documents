/**
 * 
 * Exemple 1 : gérer le nombre de visites à la page Web
 *
 */
//L'élément de la page pour indiquer le nombre de visites
let elmVisites = document.querySelector("footer > p");
//------NOMBRES DE VISITES
let nbVisites = localStorage.getItem("compteur-visites");
//Vérifier si l'utilisateur a déjà visité le site
if (nbVisites == null) {
  //Aucune donnée stockée avec cette clé
  //C'est la première visite
  nbVisites = 1;
  elmVisites.innerText = "Vous visitez ce site pour la première fois!";
} else {
  //La chaîne est convertie en nombre avant son incrémentation
  nbVisites++;
  elmVisites.innerText = "Vous avez visité ce site : " + nbVisites + " fois.";
}
//On stocke localement le nombre de visites
localStorage.setItem("compteur-visites", nbVisites);


/**
 * 
 * Exemple 2 : gérer le choix de thème de couleur
 *
 */

//La case à cocher pour le choix du thème et son état enregistrée
//lors de la dernière visite de l'utilisateur
let caseACocherTheme = document.querySelector("#cc-couleur-theme");
caseACocherTheme.addEventListener("click", changerTheme);
let etatCase = localStorage.getItem("theme-sombre-actif");

if (etatCase != null) {
  //On a déjà enregistrée une donnée sur l'état de la case à cocher
  //On récupère cette donnée pour gérer le thème, en s'assurant de la convertir
  //en valeur de type booléenne avec un opérateur ternaire
  //condition ? expressionSiVrai : expressionSiFaux
  //Voir à ce sujet: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  console.log(typeof etatCase);

  // Boolean("fdgdfgd"), Boolean("true"), Boolean("false")
  //On ajuste l'aspect de la case à cocher
  caseACocherTheme.checked = etatCase=="true" ? true : false;

  //On change le thème en conséquence
  changerTheme();
}

/**
 * Fonction pour changer le thème de la page Web si la case à cocher est cochée.
 */
function changerTheme() {
  //Récupérer le sélecteur :root
  let selecteurRoot = document.querySelector(":root");

  if (caseACocherTheme.checked == true) {
    //On change les couleurs pour les sombres
    selecteurRoot.style.setProperty("--couleur-fond-1", "#616161");
    selecteurRoot.style.setProperty("--couleur-fond-2", "#9e9e9e");
    selecteurRoot.style.setProperty("--couleur-texte", "#fff");
  } else {
    //On remet les couleurs claires
    selecteurRoot.style.setProperty("--couleur-fond-1", "#fbe8b2");
    selecteurRoot.style.setProperty("--couleur-fond-2", " #fff");
    selecteurRoot.style.setProperty("--couleur-texte", "#9e9e9e");
  }

  //On mémorise l'état de la case à cocher
  localStorage.setItem("theme-sombre-actif", caseACocherTheme.checked);
}


/**
 * 
 * Exemple 3 : gérer le score maximal pour un jeu
 *
 */

//Le score actuel
let score = 0;
//L'élément de la page pour indiquer le score actuel
let elmScore = document.querySelector("#score");

//L'élément de la page pour indiquer le meilleur score
let elmMeilleurScore = document.querySelector("#meilleur-score");

//La section sur laquelle on va cliquer...
let laSection = document.querySelector("section");
laSection.addEventListener("click", cliquerSection);


//------MEILLEUR SCORE
// Vérification immédiate... gérée avec une expression logique
//Voir à ce sujet: https://fr.javascript.info/logical-operators
let meilleurScore = localStorage.getItem("meilleur-score") || score;
elmMeilleurScore.innerText = meilleurScore;

/**
 * Fonction pour détecter les clics sur la section et incrémenter le score.
 */
function cliquerSection() {
  //Incrémenter le score et l'afficher
  score++;
  elmScore.innerText = score;

  //Enregistrement immédiat du meilleur score, s'il y a lieu
  localStorage.setItem("meilleur-score", Math.max(meilleurScore, score));
}
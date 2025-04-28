/*///////////////////////////////////////////////////////////////////////
                        LES VARIABLES ET GESTIONNAIRES D'ÉVÉNEMENT
///////////////////////////////////////////////////////////////////////*/

//Le nombre de fois que l'utilisateur a visité le site
let nbVisites; // - vérification de la valeur plus bas
//L'élément de la page pour indiquer le nombre de visites
let elmVisites = document.querySelector("footer > p");

//La case à cocher pour le choix du thème et son état enregistrée
//lors de la dernière visite de l'utilisateur
let etatCase; // - vérification de la valeur plus bas
let caseACocherTheme = document.querySelector("#cc-couleur-theme");
caseACocherTheme.addEventListener("click", changerTheme);

//Le score actuel
let score = 0;
//L'élément de la page pour indiquer le score actuel
let elmScore = document.querySelector("#score");

//Le meilleur score
let meilleurScore; // - vérification de la valeur plus bas
//L'élément de la page pour indiquer le meilleur score
let elmMeilleurScore = document.querySelector("#meilleur-score");

//La section sur laquelle on va cliquer...
let laSection = document.querySelector("section");
laSection.addEventListener("click", cliquerSection);

/*///////////////////////////////////////////////////////////////////////
                        VÉRIFICATION DES DONNÉES SAUVEGARDÉES
///////////////////////////////////////////////////////////////////////*/

//------NOMBRES DE VISITES
nbVisites;
//Vérifier si l'utilisateur a déjà visité le site
if (true) {
  //Aucune donnée stockée avec cette clé
  //C'est la première visite
  nbVisites = 1;
  elmVisites.innerText = "Vous visitez ce site pour la première fois!";
} else {
  //La chaîne est convertie en nombre avant son incrémentation
  nbVisites;
  elmVisites.innerText = "Vous avez visité ce site : " + " fois.";
}
//On stocke localement le nombre de visites

//------THÈME DE COULEUR SELON L'ÉTAT DE LA CASE À COCHER
//Vérifier si l'utilisateur a changé le thème de couleur su site lors de sa dernière visite
etatCase;

if (true) {
  //On a déjà enregistrée une donnée sur l'état de la case à cocher
  //On récupère cette donnée pour gérer le thème, en s'assurant de la convertir
  //en valeur de type booléenne avec un opérateur ternaire
  //condition ? expressionSiVrai : expressionSiFaux
  //Voir à ce sujet: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  console.log(typeof etatCase);

  //On ajuste l'aspect de la case à cocher

  //On change le thème en conséquence
}

//------MEILLEUR SCORE
// Vérification immédiate... gérée avec une expression logique
//Voir à ce sujet: https://fr.javascript.info/logical-operators
meilleurScore;
elmMeilleurScore.innerText = meilleurScore;

/*///////////////////////////////////////////////////////////////////////
                        LES FONCTIONS
///////////////////////////////////////////////////////////////////////*/

/**
 * Fonction pour changer le thème de la page Web si la case à cocher est cochée.
 *
 * @param {MouseEvent} evt Événement de souris ayant déclenché l'appel de fonction.
 */
function changerTheme(evt) {
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
}

/**
 * Fonction pour détecter les clics sur la section et incrémenter le score.
 *
 * @param {MouseEvent} evt Événement de souris ayant délenché l'appel de fonction.
 */
function cliquerSection(evt) {
  //Incrémenter le score et l'afficher
  score++;
  elmScore.innerText = score;

  //Enregistrement immédiat du meilleur score, s'il y a lieu
}

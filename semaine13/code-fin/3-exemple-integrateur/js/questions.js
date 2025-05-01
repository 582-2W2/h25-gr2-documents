/*////////////////////////////////////////////////////////////////////////////////////////////
														LES QUESTIONS DU QUIZ
	Banque de questions dans une "structure de données" JavaScript : le tableau contient
	une collection de questions, et chaque question à trouver est un objet JavaScript
	qui contient TROIS valeurs : la chaîne du titre de la question, un tableau (Array) pour les
	choix de réponse et un nombre indiquant l'index de la bonne réponse...
///////////////////////////////////////////////////////////////////////////////////////////////*/

let lesQuestions = [
	{
		titre: "Quelle lettre de l'alphabet latin correspond à la lettre cyrillique '\u041F' ?",
		choix: ['M', 'N', 'P'],
		bonneReponse: 2
	},
	{
		titre: "Lequel est un nombre 'premier' ?",
		choix: [1, 2, 9],
		bonneReponse: 1
	},
	{
		titre: "Lequel des symboles suivants provient d'une langue dite 'morte' (qui n'est plus utilisée) ?",
		choix: ['\uFEC6', '\uD80C\uDC44', '\u4EB0'],
		bonneReponse: 1,
	},
	{
		titre: "Quel symbole représente l'infini en mathématique ?",
		choix: ['\u2135', '8', '\u221E'],
		bonneReponse: 2
	},
	{
		titre: "Quelle lettre ne figure jamais dans les 300 pages du roman 'La disparition' de Georges Perec ?",
		choix: ['e', 'x', 'z'],
		bonneReponse: 0
	}
]
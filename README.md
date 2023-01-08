# Export Test

Ce programme permet de démarrer de façon asynchrone un nouvel export et affiche la liste des exports avec leur progression. Une fois l'export terminé, la liste affiche l'URL.

## Utilisation

1. Cliquez sur le bouton "Export" pour démarrer un nouvel export.
2. La liste affiche la progression de l'export en cours.
3. Une fois l'export terminé, la liste affiche l'URL.

## Détails techniques

- Le framework front utilisé est Blaze.
- utilisation de BOOTSTRAP pour faciliter la mise en page
- La progression de l'export avance de 5% chaque seconde.
- Une fois arrivé à 100%, l'export sélectionne une URL au hasard.
- les packages insecure et autopublish sont supprimés.

## Installation

1. Assurez-vous d'avoir installé Meteor.
2. Clonez ce répertoire sur votre ordinateur.
3. Dans le répertoire du projet, exécutez la commande `meteor npm install` pour installer les dépendances.
4. Exécutez la commande `meteor` pour lancer l'application.
5. Ouvrez votre navigateur à l'adresse `http://localhost:3000` pour accéder à l'application.

// Asynchronous Programming
// La programmation asynchrone permet à votre programme d'exécuter des tâches en parallèle sans bloquer le fil d'exécution principal.
// Cela permet à votre application de rester réactive et de continuer à fonctionner pendant que des opérations longues,
// comme des requêtes réseau ou des lectures de fichiers, sont en cours.

// Understanding Promises
// Les promesses sont des objets JavaScript qui représentent une valeur pouvant être disponible immédiatement,
// dans le futur ou jamais. Elles sont utilisées pour gérer des opérations asynchrones de manière plus propre et plus lisible que les callbacks.
// Exemple :
const myPromise = new Promise((resolve, reject) => {
  // Simule une opération asynchrone réussie après 1 seconde
  setTimeout(() => {
    resolve("Données récupérées avec succès");
  }, 1000);
});


myPromise.then((data) => {
  console.log(data); // Affiche : Données récupérées avec succès
});

// Consuming Promises
// Pour consommer une promesse, vous utilisez la méthode .then() pour spécifier ce qui doit se produire lorsque la promesse est résolue
//  (avec succès) et la méthode .catch() pour gérer les erreurs.
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Queuing Promises
// Vous pouvez mettre en file d'attente des promesses pour qu'elles s'exécutent
// séquentiellement en chaînant les méthodes .then().
// Exemple :
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Première tâche terminée");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deuxième tâche terminée");
  }, 500);
});

promise1
  .then((data) => {
    console.log(data);
    return promise2;
  })
  .then((data) => {
    console.log(data);
  });

// Creating Promises
// Vous pouvez créer vos propres promesses pour encapsuler des opérations asynchrones personnalisées.
// Exemple :
function fetchData() {
  return new Promise((resolve, reject) => {
    // Code pour récupérer des données de manière asynchrone
    // Si les données sont récupérées avec succès, appeler resolve()
    // Sinon, appeler reject()
  });
}

async function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simuler un délai de 1 seconde pour la requête API
    setTimeout(() => {
      const success = Math.random() < 0.5; // Simuler aléatoirement le succès ou l'échec de la requête
      if (success) {
        resolve("Données récupérées de l'API");
      } else {
        reject("Erreur lors de la récupération des données de l'API");
      }
    }, 1000);
  });
}

// Iterating with Async / Await
// async/await est un moyen de rendre le code asynchrone plus lisible et plus proche de la syntaxe synchrone.
//  async est utilisé pour déclarer une fonction asynchrone, tandis que await est utilisé à l'intérieur d'une fonction
//  asynchrone pour attendre la résolution d'une promesse.
// Exemple :

async function fetchData() {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Error Handling in JavaScript
// La gestion des erreurs en JavaScript est essentielle pour gérer les erreurs de manière
// efficace et maintenir la fiabilité de votre application. Vous pouvez utiliser
// les blocs try, catch et finally pour gérer les erreurs.
// Exemple :
try {
  // Code potentiellement problématique
  throw new Error("Une erreur s'est produite");
} catch (error) {
  console.error(error);
} finally {
  // Code exécuté quelle que soit l'issue du bloc try-catch
}


// En comprenant ces concepts et en les appliquant, vous serez en mesure de créer des applications
//  JavaScript robustes et efficaces, capables de gérer des opérations asynchrones et de gérer les erreurs de manière appropriée.

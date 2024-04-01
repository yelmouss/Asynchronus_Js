// Task 01: Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000);
    });
  }
}

// Exemple d'utilisation :
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
// Cette fonction itère sur un tableau de valeurs et logue chaque valeur avec un délai de 1 seconde
//  entre les logs en utilisant async/await pour gérer l'asynchronisme.

// Task 02: Awaiting a Call
async function awaitCall() {
  try {
    const data = await fetchDataFromAPI();
    console.log(data);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données."
    );
  }
}

async function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simuler un délai de 1 seconde pour la requête API
    setTimeout(() => {
      resolve("Données récupérées de l'API");
    }, 1000);
  });
}

// Exemple d'utilisation :
awaitCall();
// Cette fonction simule la récupération de données depuis une API en utilisant await pour attendre la réponse de l'API,
//  puis logue les données. En cas d'erreur, elle gère l'erreur de manière appropriée.

// Task 03: Handling Errors with Async/Await
// La fonction awaitCall a déjà été modifiée pour gérer les erreurs de manière appropriée, comme expliqué dans la Task 02.

// Task 04: Chaining Async/Await
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function firstAsyncFunction() {
  await delay(1000);
  console.log("Première fonction asynchrone terminée");
}

async function secondAsyncFunction() {
  await delay(1000);
  console.log("Deuxième fonction asynchrone terminée");
}

async function thirdAsyncFunction() {
  await delay(1000);
  console.log("Troisième fonction asynchrone terminée");
}

async function chainedAsyncFunctions() {
  await firstAsyncFunction();
  await secondAsyncFunction();
  await thirdAsyncFunction();
}

// Exemple d'utilisation :
chainedAsyncFunctions();
// Cette fonction appelle trois fonctions asynchrones séquentiellement en utilisant await,
// chaque fonction loguant un message après un délai de 1 seconde.

// Task 05: Awaiting Concurrent Requests

async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([
        fetchDataFromAPI("https://example.com/api/data1"),
        fetchDataFromAPI("https://example.com/api/data2"),
      ]);
      console.log("Résultat 1:", result1);
      console.log("Résultat 2:", result2);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }
  }
// Exemple d'utilisation :
concurrentRequests();
// Cette fonction effectue deux appels API en parallèle en utilisant Promise.all(),
//  puis logue les résultats combinés une fois que les deux appels ont été résolus.

// Task 06: Awaiting Parallel Calls

async function parallelCalls(urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
//   const data = await Promise.all(responses.map((response) => response));
  const data = await Promise.all(responses.map((response) => response.json()));
  console.log("Réponses:", data);
}

// Exemple d'utilisation :
// Exemple d'utilisation :
const urls = ["https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/comments", "https://jsonplaceholder.typicode.com/todos"];
parallelCalls(urls);

// Cette fonction effectue plusieurs appels API en parallèle en utilisant Promise.all() avec la méthode map,
//  puis logue les réponses une fois que tous les appels sont terminés.

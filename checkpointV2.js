// Tâche 01: Itération avec Async/Await

async function iterateWithAsyncAwait(array) {
  for (let value of array) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

const values = [1, 2, 3, 4, 5, 6];
iterateWithAsyncAwait(values);

//// Dans cette fonction, nous utilisons une boucle for...of pour itérer sur chaque valeur de l’array.
//// Nous utilisons console.log pour afficher la valeur, puis nous utilisons await avec une nouvelle
//// promesse qui se résout après un délai d’une seconde. Cela crée un délai d’une seconde entre chaque log.

//// Tâche 02: Attendre un appel

async function awaitCall() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  console.log(data);
}

//// Dans cette fonction, nous utilisons fetch pour faire une requête à une API.
//// Nous utilisons await pour attendre que la promesse renvoyée par fetch soit résolue,
//// puis nous utilisons await une deuxième fois pour attendre que la promesse renvoyée par response.json() soit résolue.
//// Enfin, nous utilisons console.log pour afficher les données.

//// Tâche 03: Gestion des erreurs avec Async/Await

async function awaitCall() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(
      "Une erreur s'est produite lors de la récupération des données: ",
      error
    );
  }
}

//// Dans cette version de la fonction, nous avons ajouté un bloc try...catch. Si une erreur se produit lors de l’exécution du code dans le bloc try,
//// l’exécution passe immédiatement au bloc catch, où nous pouvons gérer l’erreur. Dans ce cas,
//// nous utilisons console.log pour afficher un message d’erreur convivial.

//// Tâche 04: Attendre des requêtes concurrentes

//// Dans cette tâche, vous devez créer une fonction asynchrone qui effectue deux appels API simultanément.
//// Vous pouvez utiliser Promise.all() pour cela. Promise.all() prend un tableau de promesses et renvoie
//// une nouvelle promesse qui ne se résout que lorsque toutes les promesses du tableau sont résolues.

async function concurrentRequests() {
  let response1 = fetch("https://api.example.com/data1");
  let response2 = fetch("https://api.example.com/data2");

  let results = await Promise.all([response1, response2]);

  let data1 = await results[0].json();
  let data2 = await results[1].json();

  console.log(data1, data2);
}

//// Dans cet exemple, nous lançons deux requêtes API simultanément,
//// puis nous utilisons Promise.all() pour attendre que les deux requêtes soient terminées.
////  Ensuite, nous utilisons await pour attendre que les données soient extraites des réponses,
////   et enfin, nous utilisons console.log pour afficher les données.

//// Tâche 05: Attendre des appels parallèles

//// Cette tâche est similaire à la tâche 04, mais au lieu de deux appels API,
//// vous devez gérer un tableau d’URLs. Vous pouvez toujours utiliser Promise.all() pour cela.

async function parallelCalls(urls) {
  let requests = urls.map((url) => fetch(url));

  let responses = await Promise.all(requests);

  let data = await Promise.all(responses.map((response) => response.json()));

  console.log(data);
}

//// Dans cet exemple, nous utilisons map pour créer un tableau de promesses à partir du tableau d’URLs.
//// Ensuite, nous utilisons Promise.all() pour attendre que toutes les requêtes soient terminées. Ensuite,
//// nous utilisons Promise.all() une deuxième fois pour extraire les données de toutes les réponses.
//// Enfin, nous utilisons console.log pour afficher les données.

// Tâche 05 : Attente des appels parallèles
async function parallelCalls(urls) {
    try {
      console.log("Lancement des appels parallèles...");
      const fetches = urls.map((url) =>
        new Promise((resolve) =>
          setTimeout(() => resolve(`Réponse de ${url}`), Math.random() * 2000)
        )
      );
    const results = await Promise.all(fetches);
    console.log("Réponses des URL:", results);
  } catch (error) {
    console.error("Erreur lors des appels parallèles :", error);
  }
}

parallelCalls(["https://api.exemple1.com", "https://api.exemple2.com", "https://api.exemple3.com"]);
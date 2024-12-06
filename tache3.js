// Tâche 03 : Gérer les erreurs avec Async/Await
async function waitCall() {
  try {
    console.log("Attente de la réponse de l'API...");
    const response = await new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Échec de l'appel API")), 2000)
    );
    console.log(response);
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error.message);
  }
}
waitCall();
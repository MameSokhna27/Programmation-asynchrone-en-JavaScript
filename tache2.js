// Tâche 02 : Attendre un appel
async function waitCall() {
    try {
      console.log("Attente de la réponse de l'API...");
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Données obtenues avec succès!"), 2000)
      );
      console.log(response);
    } catch (error) {
      console.error("Erreur lors de l'appel API", error);
    }
  }
  
waitCall();
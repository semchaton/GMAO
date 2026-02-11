const API_URL = "http://localhost:8081/machine";

export const getMachines = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return response.json();
};

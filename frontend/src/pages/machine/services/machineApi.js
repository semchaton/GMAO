const API_MACHINE = "http://localhost:8081/machine";
const API_CRITICITE = "http://localhost:8081/criticite";
const API_CLASSE = "http://localhost:8081/classe";
const API_EMPLACEMENT = "http://localhost:8081/emplacement";

export const getMachines = async () => {
  const response = await fetch(API_MACHINE);
  if (!response.ok) throw new Error("Erreur API");
  return response.json();
};

export const getCriticite = async () => {
  const response = await fetch(API_CRITICITE);
  if (!response.ok) throw new Error("Erreur API");
  return response.json();
};
export const getClasse = async () => {
  const response = await fetch(API_CLASSE);
  if (!response.ok) throw new Error("Erreur API");
  return response.json();
};
export const getEmplacement = async () => {
  const response = await fetch(API_EMPLACEMENT);
  if (!response.ok) throw new Error("Erreur API");
  return response.json();
};
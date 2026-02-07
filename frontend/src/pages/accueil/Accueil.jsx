import { useEffect } from "react";

export default function Accueil() {
  useEffect(() => {document.title = "Mon nouveau titre";}, []);
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <h1 className="text-3x text-center">Bienvenue sur le Dashboard </h1>
      
    </div>
  );
}
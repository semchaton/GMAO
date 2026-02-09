import { useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function Accueil() {
  useEffect(() => {document.title = "Mon nouveau titre";}, []);
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <Navbar/>
      
    </div>
  );
}
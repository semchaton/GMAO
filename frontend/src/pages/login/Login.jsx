import Validation from "./Validation";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSuccess() {
    navigate("/accueil");
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold text-slate-50 pb-5 text-2xl pt-5">Bienvenue</h1>
      <img className="w-30 h-30 mx-auto pb-5" src="src/styles/logo/Logo.svg" alt="logo" />
      <Validation onSuccess={handleSuccess} />
    </div>
  );
}

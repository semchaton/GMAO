import Validation from "./Validation";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSuccess() {
    navigate("/accueil");
  }

  return (
    <div className="min-h-screen pt-10">
      <h1 className="text-center font-bold text-slate-50 pb-10">Bienvenue</h1>
      <Validation onSuccess={handleSuccess} />
    </div>
  );
}

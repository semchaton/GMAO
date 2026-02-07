import Validation from "./Validation";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSuccess() {
    navigate("/accueil");
  }

  return (
    <div className="min-h-screen pt-10">
      <h1 className="font-bold text-slate-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dictczcczceeca, quod!</h1>
      <Validation onSuccess={handleSuccess} />
    </div>
  );
}

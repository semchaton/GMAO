import { useState } from "react";
import Pseudo from "./Pseudo";
import Password from "./Password";
import Confirmation from "./Confirmation";

export default function Validation(){
    const[inputStates, setInputsStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""   
    })
    const[showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false   
    })

    function handleSubmit(e){
        e.preventDefault()

        if(validationCheck()){
            console.log("Envoi du formulaire")
        }
    }
    function validationCheck(){
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false   
        }
        if(inputStates.pseudo.length < 3  || inputStates.pseudo.length > 64){
            setShowValidation (state => ({...state, pseudo: true}))
        }else{
            areValid.pseudo = true
            setShowValidation (state => ({...state, pseudo: false}))
        }
        // /\d/ => contient chiffre
        if(inputStates.password.length < 6 || !/\d/.test(inputStates.password)){
            setShowValidation (state => ({...state, password: true}))
        }else{
            areValid.password = true
            setShowValidation (state => ({...state, password: false}))
        }

        if(inputStates.passwordConfirmation !== inputStates.password){
            setShowValidation (state => ({...state, passwordConfirmation: true}))
        }else{
            areValid.passwordConfirmation = true
            setShowValidation (state => ({...state, passwordConfirmation: false}))
        }
        if(Object.values(areValid).every(value => value)){
            return true
        }else{
            return false
        }
    }

    return(
        <form 
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto border p-10 rounded w-full lg:w-1/2">
            <p className="text-slate-100 text-x1 mb-6">
                Créez mdp et nom user
            </p>
            <Pseudo
            inputStates={inputStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            />
            <Password
            inputStates={inputStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            />
            <Confirmation
            inputStates={inputStates}
            setInputsStates={setInputsStates}
            showValidation={showValidation}
            /> 
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded"> Valider </button>
        </form>
    )
}
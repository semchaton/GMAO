export default function Confirmation ({inputStates, setInputsStates, showValidation}){
    return(
        <>
            <label htmlFor="confirmation" className="text-slate-50 inline-block mt-5">Confirmez votre mdp              
            </label>
            <input 
            id="confirmation"
            type="password"
            className="rounded w-full p-1 mt-2"
            value={inputStates.passwordConfirmation}
            onChange={e => setInputsStates({...inputStates, passwordConfirmation: e.target.value})}
            />
            {(showValidation.passwordConfirmation) && (
                <p className="text-red-400 font-bold">
                    Saisir le même mdp
                </p>
            )}
        </>
    )
}
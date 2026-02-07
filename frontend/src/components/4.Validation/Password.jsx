export default function Password ({inputStates, setInputsStates, showValidation}){
    return(
        <>
            <label htmlFor="password" className="text-slate-50 inline-block mt-5">Votre mpd (6 caractères minimum et 1 chiffre minimum)                
            </label>
            <input 
            id="password"
            type="password"
            className="rounded w-full p-1 mt-2"
            value={inputStates.password}
            onChange={e => setInputsStates({...inputStates, password: e.target.value})}
            />
            {(showValidation.password) && (
                <p className="text-red-400 font-bold">
                    Mdp non conforme
                </p>
            )}
        </>
    )
}
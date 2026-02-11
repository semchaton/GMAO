import "../style.css"

function SelectionMachine({ machines = [] }) {
  return (
    <div className="mt-25">
      <h3 className="ml-15">Nom de la machine:</h3>

      <input
        list="machinesList"
        className="border-2 rounded border-slate-900 ml-15"
        placeholder="Choisir ou saisir..."
      />

      <datalist id="machinesList">
        {machines.map(machine => (
          <option key={machine.id} value={machine.nom} />
        ))}
      </datalist>
    </div>
  )
}

export default SelectionMachine

import { useState } from "react"
import "../style.css"
import iconeModificationMachine from "../style/iconeModificationMachine.svg";
import iconeAjoutMachine from "../style/iconeAjoutMachine.svg";

function SelectionMachine({ machines = [] }) {
  const [selectedMachine, setSelectedMachine] = useState(null)

  const handleChange = (e) => {
    const selectedName = e.target.value

    const machine = machines.find(
      (m) => m.nom === selectedName
    )

    setSelectedMachine(machine)
  }

  console.log(machines)
return (
  <div className="mt-20">

    <img className="ml-10" src={iconeModificationMachine} alt="Modification machine" width="40" />
    <img className="ml-10 mt-5" src={iconeAjoutMachine} alt="Modification machine" width="40" />

    <h3 className="mt-5 ml-15">Nom de la machine:</h3>

    <input
      list="machinesList"
      className="border-2 rounded border-slate-900 ml-15"
      placeholder="Choisir ou saisir..."
      onChange={handleChange}
    />

    <datalist id="machinesList">
      {machines.map(machine => (
        <option key={machine.id} value={machine.nom} />
      ))}
    </datalist>

    {/* Bloc infos + image */}
    <div className="flex justify-between items-start mt-10">

      {/* Partie gauche (infos) */}
      <div className="ml-15 space-y-4">

        <div>
          <h3>Criticité :</h3>
          <input
            className="border-2 rounded border-slate-900"
            value={selectedMachine?.criticite || ""}
            readOnly
          />
        </div>

        <div>
          <h3>Classe :</h3>
          <input
            className="border-2 rounded border-slate-900"
            value={selectedMachine?.descriptionClasseOuverture || ""}
            readOnly
          />
        </div>

        <div>
          <h3>Emplacement :</h3>
          <input
            className="border-2 rounded border-slate-900"
            value={selectedMachine?.emplacement || ""}
            readOnly
          />
        </div>

      </div>

      {/* Partie droite (image) */}
      {selectedMachine && (
        <div className="mr-15 border-2 rounded border-slate-900">
          <img
            src={`/photosMachines/${selectedMachine.nom}.jpg`}
            alt={selectedMachine.nom}
            width="250"
          />
        </div>
      )}
      <div>
          <h3 className="mt-0">Description :</h3>
          <input
            className="border-2 mr-15 rounded border-slate-900"
            value={selectedMachine?.description || ""}
            readOnly
          />
      </div>

    </div>

  </div>
)

}

export default SelectionMachine

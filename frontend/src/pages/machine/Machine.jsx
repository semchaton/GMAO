import { useEffect, useState } from "react"
import { getMachines } from "./services/machineApi"
import MachineList from "./components/MachineList"
import Navbar from "../../components/Navbar"
import SelectionMachine from "./components/SelectionMachine"


export default function Machine() {
    const [machines, setMachines] = useState([]);
    const loadMachines = async () => {
        const data = await getMachines();
        setMachines(data);
    };

    useEffect(() => {
        loadMachines();
    }, []);
    //<SelectionMachine/>
    return(
        <div className="min-h-screen text-white">
            <Navbar/>
            <SelectionMachine machines={machines} />
            
        </div>
        
    )
}
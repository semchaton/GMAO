import { useEffect, useState } from "react"
import { getMachines } from "./services/machineApi"
import MachineList from "./components/MachineList"
import Navbar from "../../components/Navbar"



export default function Machine() {
    const [machines, setMachines] = useState([]);
    const loadMachines = async () => {
        const data = await getMachines();
        setMachines(data);
    };

    useEffect(() => {
        loadMachines();
    }, []);

    return(
        <div className="min-h-screen text-white flex items-center justify-center">
            <Navbar/>
            <h1>Page machine</h1>
            <MachineList machines={machines} />
        </div>
        
    )
}
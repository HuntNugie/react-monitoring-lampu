import {useEffect, useState} from "react";
import axios from "axios";
function App() {
    const [status_lampu, setStatus_lampu] = useState("lampu mati");

    useEffect(()=>{
      async function requestSekali(){
        const url = import.meta.env.VITE_BACKEND_API;
        const res = await axios.get(`${url}/api/lampu/all`);
        const result = res.data;
        setStatus_lampu(`lampu ${result.status_lampu}`)
      }
      requestSekali();
    },[]);
    const handleKlik = async (e) => {
        e.preventDefault();
        const url = import.meta.env.VITE_BACKEND_API;
        const res = await axios.put(`${url}/api/lampu/update`);
        const result = res.data;
        setStatus_lampu(result.message)
    };
    return (
        <>
            <div className="p-6 bg-white rounded-2xl shadow-md text-center select-none space-y-4">
                <h1 className="text-xl font-semibold">Kontrol Lampu</h1>

                {/* STATUS LAMPU */}
                <div
                    id="lamp-status"
                    className="px-4 py-2 rounded-xl font-semibold text-sm 
                   bg-gray-200 text-gray-600"
                >
                   {status_lampu}
                </div>

                <button
                    onClick={handleKlik}
                    className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition"
                >
                    Nyalakan Lampu
                </button>
            </div>
        </>
    );
}

export default App;

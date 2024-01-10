import { useEffect, useState} from "react";
import Turnament from "../components/Turnament"
import URL from "..utils/URL.js"


const getURL = 'https://bhc-backend.antonpandi.repl.co/turnaments';
const controller = new AbortController();

export default function Navbar(){

    const [results, setResults] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch( getURL , {signal:controller.signal, method:"GET"});
            const data = await response.json();
            setResults(data)
        }

        getData();

        console.log("Results: ", results);

        return () => {
            controller.abort;
        };
    }, [])


    return(
    
    <div className="post post-container ">
        <p>`${URL()}`</p>
        {results.length === 0 && "No turnament"}
            {results.map(turnament => {
                return ( <Turnament {...turnament} key={turnament.id} /> )
            })}
    </div>
    )
}
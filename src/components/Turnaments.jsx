import { useEffect, useState} from "react";
import Turnament from "../components/Turnament"
import {URL} from "..utils/URL.js"


const getURL = 'https://1cc993c9-7583-4fa0-a1ed-b43526fe4c80-00-3la8yy84ot0t5.janeway.replit.dev/turnaments';
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
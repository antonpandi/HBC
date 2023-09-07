import { useEffect, useState} from "react";
import Post from "../components/Post"


const getURL = 'https://bhc-backend.antonpandi.repl.co/posts';
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
        {results.length === 0 && "No Posts"}
            {results.map(post => {
                return ( <Post {...post} key={post.id} /> )
            })}
    </div>
    )
}
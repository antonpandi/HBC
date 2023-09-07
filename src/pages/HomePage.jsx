import teampic from "../assets/images/testbild.png"

import Posts from "../components/Posts"

export default function Home(){
    return (
        <>
            <h1 className="text-center">Välkommen till HBCs officiella hemsida!</h1>
            <span className="h-50 d-inline-block">
                <img className="ratio ratio-16x9 object-fit-cover border rounded" src={teampic} alt="" />
            </span>
            <Posts />
        </>
    )
}


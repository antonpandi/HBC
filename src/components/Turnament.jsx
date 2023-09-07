


export default function Turnament(turnament){
    return(
        <div className="turnament row justify-content-center mb-4 mt-5">
                <div className="col-6 text-left">
                    <p>Torsdags tunering: {turnament.type}</p>
                    <p>{turnament.date.split('T')[0]}</p>
                </div>
                
                <div className="col-4 d-flex justify-content-center mt-3 mb-3">
                    <button type="submit" className="btn btn-primary ">Anmäl</button>
                </div>
        </div>
    )
}
const React = require("react")
const Def = require("../default")

// Show layot view for each place
function show (data) {
    return (
        <Def>
            {/* Was not rendering*/}
            <link rel="stylesheet" href="../style.css"/>
            <main>                               
                <div className="row">
                    <div className="col-sm-6">                    
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3 className="text-center">
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>                    
                    <div className="col-sm-6">
                        <div>
                            <h1>{ data.place.name }</h1>
                        </div>
                        <br/>
                        <div>
                            <h1>Rating</h1>
                            <h2>Not Rated</h2>
                        </div>
                        <br/>
                        <div>
                            <h1>Description</h1>
                            <h2>{data.place.showEstablished()}</h2>                         
                            <h3>Serving {data.place.cuisines}</h3>
                        </div>        
                        <br/>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                    <div className="text-center">
                        <h1>Comments</h1> 
                        <h2>No Comments</h2> 
                    </div>            
                </div>               
            </main>
        </Def>
    )
}

module.exports = show
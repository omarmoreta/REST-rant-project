const React = require("react")
const Def = require("../default")

function show(data) {
    return (
        <Def>
            {/* Was not rendering*/}
            <link rel="stylesheet" href="../style.css"/>
            <main>
                <h1>{ data.place.name } Review</h1>
                <div className="col-sm-6">
                    <p className="text-center">
                        {data.place.cuisines}
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name}/>
                        <p className="text-center">
                            Located in {data.place.city}, {data.place.state}
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <h1>Comments</h1>
                        </div>
                        <div>
                            <p>currently there are no comments</p>
                        </div>
                        <div>
                            <h1>Ratings</h1>                            
                        </div>
                        <div>
                            <p>no ratings yet</p>
                        </div>       
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>                           
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
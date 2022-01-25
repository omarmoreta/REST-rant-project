const React = require("react")
const Def = require("../default")

// Edit layout view form to change places in db
function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={data.place.name}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" name="pic" defaultValue={data.place.pic}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={data.place.city}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={data.place.state}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" type="number" id="founded" name="founded" defaultValue={data.place.founded}/>
                        </div>
                    </div>   
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Edit Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
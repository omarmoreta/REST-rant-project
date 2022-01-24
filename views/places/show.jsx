const React = require("react")
const Def = require("../default")

// Show layot view for each place
function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
    let sumRatings;
      if (data.place.comments.length) {
        sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        // console.log("average", averageRating)
        let stars = ''
            for (let i = 0; i < averageRating; i++) {
              stars += '⭐️'              
            }
        rating = (
          <h3>
            {stars}
          </h3>
        )
        comments = data.place.comments.map(comment => {
            return (
                <div key={comment.id} className="border">
                    <h2 className="rant">{comment.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment"/>
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
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
                            <h2>Ratings {rating}</h2>
                            <h1>Description</h1>
                            <h2>{data.place.showEstablished()}</h2>                         
                            <h3>Serving {data.place.cuisines}.</h3>
                        </div>        
                        <br/>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>                             
                </div>               
            </main>
            <div>
                <div> 
                    <h3 className="text-center">Comments</h3>
                        {comments}
                    <h4 className="text-center">Got Your Own Rant or Rave?</h4>
                </div>  
                <form action={`/places/${data.place.id}/comment`} method="POST">                    
                    <div>
                        <label htmlFor="author">Name: </label>
                        <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                    </div>
                    <div>
                        <label htmlFor="stars">Rating: </label>                                
                        <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>                                  
                    </div>
                    <div>
                        <label htmlFor="rant">Is this a rant? </label>             
                        <input type="checkbox" id="rant" name="rant" />                         
                    </div>
                    <div>
                        <label htmlFor="content">Comment: </label>
                        <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>                    
                </form>
            </div>
        </Def>
    )
}

module.exports = show
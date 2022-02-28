const React = require("react")
const Def = require("./default")
import { Button } from "react-bootstrap"

// Home layout view
function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/waffles.jpg" alt="Waffles dripped with syrup"/>
                    <div>
                        Photo by <a href="https://unsplash.com/photos/GJAHkC6UMf0">Lindsay Moe</a> on <a href="https://unsplash.com/@lindsaymoe">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <Button variant="primary">Places Page</Button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
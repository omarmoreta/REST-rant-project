const React = require("react")
const Def = require("./default")

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/waffles.jpg" alt="Waffles dripped with syrup"/>
                    <div>
                        Photo by <a href="https://unsplash.com/photos/GJAHkC6UMf0">Lindsay Moe</a> on <a href="https://unsplash.com/@lindsaymoe">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
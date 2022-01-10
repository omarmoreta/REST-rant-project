const React = require("react")
const Def = require("./default")

// Error layout view
function error404 () {
    return (
        <Def>
            {/* Was not rendering*/}
            <link rel="stylesheet" href="./style.css"/>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/goofy-404.jpg" alt="Woman licking a spoon cross-eyed"/>
                    <div>
                        Photo by <a href="https://unsplash.com/photos/SWnviQeRsjI">Alex Perez</a> on <a href="https://unsplash.com/@a2eorigins">Unsplash</a>
                    </div>
                </div>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>

    )
}

module.exports = error404
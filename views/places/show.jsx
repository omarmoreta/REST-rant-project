const React = require("react")
const Def = require("../default")

function show() {
    return (
        <Def>
            {/* Was not rendering*/}
            <link rel="stylesheet" href="../style.css"/>
            <main>
                <h1>Show Page</h1>
            </main>
        </Def>
    )
}

module.exports = show
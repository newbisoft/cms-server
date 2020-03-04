require("dotenv/config");
const app = require('express')();
const routes = require('./routes')

app.use(routes)
app.listen(3000, () => {
    console.log("App listening on http://localhost:3000")
})
const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(req)
    return res.send("teste")
})

module.exports = router
const { Router } = require("express")
const router =  Router()
const employeesController = require("./controllers/employeesController")

router.post("/login", employeesController.login )

module.exports = router
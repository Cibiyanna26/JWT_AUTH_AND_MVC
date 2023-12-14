const express = require("express");
const {auth} = require('../middleware/authMiddleware')
const router = express.Router();

const {getGoal,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')


router.route('/').get(auth,getGoal).post(auth,setGoal)
router.route('/:id').put(auth,updateGoal).delete(auth,deleteGoal)


module.exports = router;
import  express from "express";
import { addUser , getUser, getUserOne , editUser ,deleteUser} from "../controller/user-controller.js";

const router = express.Router();

router.post('/AddUser',addUser);
router.get('/AllUsers',getUser);
router.get('/:id',getUserOne); 
router.put('/:id',editUser);  
router.delete('/:id',deleteUser);

export default router;   
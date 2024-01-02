import { Router } from "express";
import verifyToken from "../jwt/token.js";
import{ userRegister,
        userLogin,
        getAllusers,
        userLoginwithpassword,
        createNewUser
} from "./controller.js"

const router = new Router();

router.post( '/userRegister',userRegister);

router.post( '/login',userLogin);

router.get('/getAllusers', verifyToken, getAllusers);

router.post( '/userpassword',userLoginwithpassword);

router.post( '/create',createNewUser)

export default router

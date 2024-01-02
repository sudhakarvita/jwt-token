import { Router } from "express";

import { bookregister,
         getAllbooks,
         getBookwithId,
         bookUpdatebyId,
         bookDeletebyId

} from "./controller.js";

const router = new Router()

router.post( '/bookregister',bookregister);

router.get( '/getAllbooks', getAllbooks);

router.get( '/bookGetbyId/:id', getBookwithId);

router.put( '/update/:id',bookUpdatebyId);

router.delete( '/delete/:id',bookDeletebyId)

export default router
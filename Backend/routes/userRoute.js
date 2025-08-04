import express from 'express'
import { getCurrentUser,registerUser,loginUser,updateProfile} from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';
const userRouter = express.Router();

//public link
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);

// private links ptotect
userRouter.get('/me',authMiddleware,getCurrentUser);
userRouter.put('/profile',authMiddleware,updateProfile);
userRouter.put('/password',authMiddleware,updateProfile);

export default userRouter;

import express from "express";

import { getPosts,createPost } from "../controllers/posts.js";
import {verify} from "./verifyToken.js"

const router=express.Router();

router.get('/',getPosts);
router.post('/create',verify,createPost);

export default router;
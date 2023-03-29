import { Router } from "express";
import Courses from "../dao/courses.manager.js";

const router = Router()
const coursesManager = new Courses()

router.get('/', async (req, res) => {
    const courses = await coursesManager.getAll()
    res.send({courses});
} );

export default  router;
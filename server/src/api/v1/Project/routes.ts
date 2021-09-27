import { isAuth } from './../../../middleware/isAuth';
import express from 'express';
import {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
} from './controller';
const router = express.Router();

router.get('/', isAuth, getAllProjects);
router.get('/:id', isAuth, getProjectById);
router.post('/', isAuth, createProject);
router.put('/:id', isAuth, updateProject);
router.delete('/:id', isAuth, deleteProject);

export default router;

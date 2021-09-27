import express from 'express';
import { createTask, toggleComplete } from './controller';

const router = express.Router();

router.post('/:categoryId/task', createTask);
router.patch('/task/:taskId', toggleComplete);

export default router;

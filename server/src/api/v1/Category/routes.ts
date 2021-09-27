import express from 'express';
import { createCategory, deleteCategory, getAllCategories } from './controller';

const router = express.Router();

router.get('/:projectId/category', getAllCategories);
router.post('/:projectId/category', createCategory);
router.delete('/category/:categoryId', deleteCategory);

export default router;

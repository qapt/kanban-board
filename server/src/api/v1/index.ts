import express from 'express';

import authRoutes from './Auth/routes';
import projectRoutes from './Project/routes';
import categoryRoutes from './Category/routes';
import taskRoutes from './Task/routes';

const router = express.Router();

router.use('/accounts', authRoutes);
router.use('/projects', projectRoutes);
router.use('/projects', categoryRoutes);
router.use('/category', taskRoutes);

export default router;

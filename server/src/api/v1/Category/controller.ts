import { InvalidInput } from './../../../errors/index';
import { NextFunction, Request, Response } from 'express';
import * as CategoryService from './service';

export const getAllCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { projectId } = req.params;
    try {
        const categories = await CategoryService.allCategories(projectId);
        res.json({ categories });
    } catch (error) {
        next(error);
    }
};

export const createCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, color } = req.body;
    const { projectId } = req.params;
    const categoryToBeAdded = { projectId, name, color };
    if (!name) return next(new InvalidInput(['Name is required']));
    if (!color) return next(new InvalidInput(['Color is required']));

    try {
        const newCategory = await CategoryService.createCategory(
            categoryToBeAdded
        );

        res.status(201).json({
            category: newCategory,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { categoryId } = req.params;

    try {
        const deletedCategory = await CategoryService.deleteCategory(
            categoryId
        );

        res.json({
            category: deletedCategory,
        });
    } catch (error) {
        next(error);
    }
};

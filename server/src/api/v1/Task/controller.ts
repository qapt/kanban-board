import { InvalidInput } from './../../../errors/index';
import { NextFunction, Request, Response } from 'express';
import * as TaskService from './service';

export const createTask = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, color } = req.body;
    const { categoryId } = req.params;
    const taskToBeAdded = { categoryId, name, color };
    if (!name) return next(new InvalidInput(['Name is required']));

    try {
        const newTask = await TaskService.createTask(taskToBeAdded);
        res.status(201).json({
            task: newTask,
        });
    } catch (error) {
        next(error);
    }
};

export const toggleComplete = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { taskId } = req.params;

    try {
        const updatedTask = await TaskService.toggleComplete(taskId);
        res.json({
            task: updatedTask,
        });
    } catch (error) {
        next(error);
    }
};

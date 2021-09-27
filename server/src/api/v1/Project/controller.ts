import { AUTH_TOKEN } from './../../../utils/constants';
import { InvalidInput } from './../../../errors/index';
import { Request, Response, NextFunction } from 'express';
import * as ProjectService from './service';

export const getAllProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.signedCookies[AUTH_TOKEN];

    try {
        const projects = await ProjectService.fetchAllProjects(userId);
        res.json({ projects });
    } catch (error) {
        next(error);
    }
};

export const getProjectById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.signedCookies[AUTH_TOKEN];
    const { id } = req.params;

    try {
        const project = await ProjectService.fetchProjectById(userId, id);
        res.json({
            project,
        });
    } catch (error) {
        next(error);
    }
};

export const createProject = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.signedCookies[AUTH_TOKEN];
    const { name, description } = req.body;

    let errors: string[] = [];
    if (!name) errors.push('Project name is required');
    if (errors.length !== 0) return next(new InvalidInput(errors));

    const projectToBeAdded: CreateProjectInput = {
        userId,
        name,
        description,
    };

    try {
        const newProject = await ProjectService.createProject(projectToBeAdded);

        res.json({ project: newProject });
    } catch (error) {
        next(error);
    }
};

export const updateProject = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.json({ msg: 'Update project' });
};

export const deleteProject = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;

    try {
        const deletedProject = await ProjectService.deleteProject(id);

        res.json({ project: deletedProject });
    } catch (error) {
        next(error);
    }
};

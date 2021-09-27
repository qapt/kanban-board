import { ServerError, NotFound } from './../../../errors/index';
import { prisma } from './../../../db/index';

export const fetchAllProjects = async (userId: string) => {
    const projects = await prisma.project.findMany({
        where: { user: { id: userId } },
    });
    if (!projects) throw new ServerError();
    return projects;
};

export const fetchProjectById = async (userId: string, projectId: string) => {
    const project = await prisma.project.findFirst({
        where: { id: projectId, user: { id: userId } },
        include: { categories: { include: { tasks: true } } },
    });
    if (!project) throw new NotFound(['Project with specified ID not found']);
    return project;
};

export const createProject = async ({
    userId,
    name,
    description,
}: CreateProjectInput) => {
    const project = await prisma.project.create({
        data: { name, description, user: { connect: { id: userId } } },
        include: { user: { select: { username: true } } },
    });

    if (!project) throw new ServerError();
    return project;
};

export const deleteProject = async (projectId: string) => {
    await prisma.category.deleteMany({ where: { projectId } });
    const deletedProject = await prisma.project.delete({
        where: { id: projectId },
    });
    if (!deletedProject) throw new ServerError();
    return deletedProject;
};

import { ServerError, NotFound } from './../../../errors/index';
import { prisma } from './../../../db/index';

export const createTask = async ({ categoryId, name }: any) => {
    const category = await prisma.category.findFirst({
        where: { id: categoryId },
    });
    if (!category) throw new NotFound(['Category does not exist']);

    const createdTask = await prisma.task.create({
        data: {
            categoryId,
            name,
        },
    });
    if (!createdTask) throw new ServerError();
    return createdTask;
};

export const toggleComplete = async (taskId: any) => {
    const task = await prisma.task.findFirst({ where: { id: taskId } });
    if (!task) throw new NotFound(['Task does not exist']);

    const updatedTask = await prisma.task.update({
        where: { id: taskId },
        data: {
            complete: !task.complete,
        },
    });
    if (!updatedTask) throw new ServerError();
    return updatedTask;
};

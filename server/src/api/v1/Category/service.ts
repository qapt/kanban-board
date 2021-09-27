import { ServerError, NotFound } from './../../../errors/index';
import { prisma } from './../../../db/index';

export const allCategories = async (projectId: string) => {
    const categories = await prisma.category.findMany({
        where: { projectId },
        select: { id: true, name: true },
    });
    if (!categories) throw new ServerError();
    return categories;
};

export const createCategory = async ({ projectId, name, color }: any) => {
    const project = await prisma.project.findFirst({
        where: { id: projectId },
    });
    if (!project) throw new NotFound(['Project does not exist']);

    const createdCategory = await prisma.category.create({
        data: {
            projectId,
            name,
            color,
        },
    });
    if (!createdCategory) throw new ServerError();
    return createdCategory;
};

export const deleteCategory = async (categoryId: string) => {
    const category = await prisma.category.findFirst({
        where: { id: categoryId },
    });
    if (!category) throw new NotFound(['Category not found']);

    await prisma.task.deleteMany({ where: { categoryId } });
    const deletedCategory = await prisma.category.delete({
        where: { id: categoryId },
    });
    if (!deletedCategory) throw new ServerError();

    return deletedCategory;
};

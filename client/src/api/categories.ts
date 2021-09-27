import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/projects';

export function useCategoryList(projectId: string) {
    return useQuery(
        ['categories', projectId],
        async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/${projectId}/category`,
                    {
                        withCredentials: true,
                    }
                );
                return data;
            } catch (error) {
                throw new Error('Unable to fetch categories.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}
export function useCreateCategoryMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ projectId, name, color }: any) => {
            try {
                await axios.post(
                    `${BASE_URL}/${projectId}/category`,
                    { name, color },
                    {
                        withCredentials: true,
                    }
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('project');
                queryClient.invalidateQueries('categories');
            },
        }
    );
}

export function useDeleteCategoryMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (categoryId: string) => {
            try {
                await axios.delete(`${BASE_URL}/category/${categoryId}`, {
                    withCredentials: true,
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        { onSuccess: () => queryClient.invalidateQueries('project') }
    );
}

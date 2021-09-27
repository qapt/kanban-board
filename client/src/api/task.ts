import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:5000/category';

export function useCreateTaskMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ categoryId, name }: any) => {
            try {
                await axios.post(
                    `${BASE_URL}/${categoryId}/task`,
                    { name },
                    {
                        withCredentials: true,
                    }
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        { onSuccess: () => queryClient.invalidateQueries('project') }
    );
}
export function useToggleCompleteMutation() {
    const queryClient = useQueryClient();
    return useMutation(
        async (taskId: any) => {
            try {
                await axios.patch(
                    `${BASE_URL}/task/${taskId}`,
                    {},
                    {
                        withCredentials: true,
                    }
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        { onSuccess: () => queryClient.invalidateQueries('project') }
    );
}

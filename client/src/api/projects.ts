import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000/projects';

export function useProjects() {
    return useQuery(
        'projects',
        async () => {
            try {
                const { data } = await axios.get(BASE_URL, {
                    withCredentials: true,
                });
                return data;
            } catch (error) {
                throw new Error('Unable to fetch projects.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useProjectById(projectId: string) {
    return useQuery(
        ['project', projectId],
        async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/${projectId}`, {
                    withCredentials: true,
                });
                return data;
            } catch (error) {
                throw new Error('Unable to fetch project.');
            }
        },
        { refetchOnWindowFocus: false }
    );
}

export function useCreateProjectMutation() {
    const queryClient = useQueryClient();
    const history = useHistory();
    return useMutation(
        async ({ name, description }: any) => {
            try {
                const { data } = await axios.post(
                    `${BASE_URL}`,
                    { name, description },
                    {
                        withCredentials: true,
                    }
                );
                history.push(`/dashboard/projects/${data.project.id}`);
            } catch (error) {
                throw new Error(error);
            }
        },
        { onSuccess: () => queryClient.invalidateQueries('projects') }
    );
}

export function useDeleteProjectMutation() {
    const queryClient = useQueryClient();
    const history = useHistory();
    return useMutation(
        async (projectId: string) => {
            try {
                await axios.delete(`${BASE_URL}/${projectId}`, {
                    withCredentials: true,
                });
                history.push('/dashboard');
            } catch (error) {
                throw new Error(error);
            }
        },
        { onSuccess: () => queryClient.invalidateQueries('projects') }
    );
}

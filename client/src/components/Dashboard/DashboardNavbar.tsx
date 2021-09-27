import { Box, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { useProjectById } from '../../api/projects';
import AddCategoryButton from '../Category/AddCategoryButton';
import AddTaskButton from '../Task/AddTaskButton';

const DashboardNavbar = () => {
    const { projectId }: any = useParams();
    const { data } = useProjectById(projectId);

    return (
        <Flex justifyContent='space-between'>
            <Box mt={4}>Dashboard {data && `> ${data.project.name}`} </Box>
            <Flex mt={3}>
                <Box mr={2}>
                    <AddCategoryButton />
                </Box>
                <Box mr={4}>
                    <AddTaskButton />
                </Box>
            </Flex>
        </Flex>
    );
};

export default DashboardNavbar;

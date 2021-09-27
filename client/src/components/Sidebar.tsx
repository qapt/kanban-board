import { Stack } from '@chakra-ui/react';
import AddProjectButton from './Project/AddProjectButton';
import ProjectList from './Project/ProjectList';

const Sidebar = () => {
    return (
        <Stack>
            <AddProjectButton />
            <ProjectList />
        </Stack>
    );
};

export default Sidebar;

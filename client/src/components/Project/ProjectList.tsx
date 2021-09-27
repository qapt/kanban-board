import { List, Box } from '@chakra-ui/react';
import { useProjects } from '../../api/projects';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    const { data } = useProjects();

    return (
        <List spacing={2} p={4}>
            {data &&
                data.projects.map((project: any) => (
                    <Box key={project.id}>
                        <Box mb={2}>
                            <ProjectItem project={project} />
                        </Box>
                        <hr style={{ border: '0.5px solid teal' }} />
                    </Box>
                ))}
        </List>
    );
};

export default ProjectList;

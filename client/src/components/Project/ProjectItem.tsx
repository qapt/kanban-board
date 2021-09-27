import { ListItem, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDeleteProjectMutation } from '../../api/projects';
import DeleteButtonAlert from '../DeleteButtonAlert';

const ProjectItem = ({ project }: any) => {
    const [hover, setHover] = useState<boolean>(false);
    const deleteProjectMutation = useDeleteProjectMutation();

    const deleteProject = (e: any) => {
        e.preventDefault();
        deleteProjectMutation.mutate(project.id);
    };

    return (
        <>
            <ListItem
                onMouseLeave={() => setHover(false)}
                onMouseOver={() => setHover(true)}
            >
                <Text
                    fontSize='xl'
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Link
                        key={project.id}
                        to={`/dashboard/projects/${project.id}`}
                    >
                        <Text>{project.name}</Text>
                    </Link>
                    {hover && (
                        <DeleteButtonAlert
                            name={project.name}
                            handleDelete={deleteProject}
                        />
                    )}
                </Text>
            </ListItem>
        </>
    );
};

export default ProjectItem;

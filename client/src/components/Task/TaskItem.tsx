import { CheckIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, ListIcon, ListItem } from '@chakra-ui/react';
import { useToggleCompleteMutation } from '../../api/task';

const TaskItem = ({ task }: any) => {
    const toggleCompleteMutation = useToggleCompleteMutation();

    const toggleComplete = (e: any) => {
        e.preventDefault();
        toggleCompleteMutation.mutate(task.id);
    };

    return (
        <ListItem key={task.id}>
            <Box onClick={toggleComplete}>
                {task.complete ? (
                    <ListIcon as={CheckIcon} color='green.400' />
                ) : (
                    <ListIcon as={TimeIcon} color='gray.400' />
                )}
                {task.name}
            </Box>
        </ListItem>
    );
};

export default TaskItem;

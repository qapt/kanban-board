import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import CreateTaskForm from '../Forms/CreateTaskForm';

const AddTaskButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box w='100%'>
            <Button
                size='sm'
                colorScheme='teal'
                leftIcon={<AddIcon />}
                onClick={onOpen}
            >
                Task
            </Button>

            <CreateTaskForm isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default AddTaskButton;

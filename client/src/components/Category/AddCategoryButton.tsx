import { Box, useDisclosure, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateCategoryForm from '../Forms/CreateCategoryForm';

const AddCategoryButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Button
                size='sm'
                colorScheme='teal'
                leftIcon={<AddIcon />}
                onClick={onOpen}
            >
                Category
            </Button>
            <CreateCategoryForm isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default AddCategoryButton;

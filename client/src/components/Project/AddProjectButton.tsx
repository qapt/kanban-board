import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, CircularProgress, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateProjectForm from '../Forms/CreateProjectForm';

const AddProjectButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return (
        <Box mx='auto' mt={4}>
            <Button colorScheme='teal' leftIcon={<AddIcon />} onClick={onOpen}>
                {isLoading ? (
                    <CircularProgress
                        isIndeterminate
                        color='blue.800'
                        thickness='29px'
                        size='20px'
                        p={7}
                    />
                ) : (
                    'Add project'
                )}
            </Button>

            <CreateProjectForm
                isOpen={isOpen}
                onClose={onClose}
                setIsLoading={setIsLoading}
            />
        </Box>
    );
};

export default AddProjectButton;

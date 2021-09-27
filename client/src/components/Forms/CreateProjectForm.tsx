import {
    Button,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCreateProjectMutation } from '../../api/projects';

const CreateProjectForm = ({ isOpen, onClose, setIsLoading }: any) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const createProjectMutation = useCreateProjectMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newProject = { name, description };
        createProjectMutation.mutate(newProject);
        setName('');
        setDescription('');
        onClose();
    };

    useEffect(() => {
        setIsLoading(createProjectMutation.isLoading);
    }, [setIsLoading, createProjectMutation.isLoading]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new project</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                focusBorderColor='teal.400'
                                errorBorderColor='crimson'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Input
                                focusBorderColor='teal.400'
                                errorBorderColor='crimson'
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' colorScheme='teal' mr={3}>
                            {createProjectMutation.isLoading
                                ? 'Loading...'
                                : 'Create'}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default CreateProjectForm;

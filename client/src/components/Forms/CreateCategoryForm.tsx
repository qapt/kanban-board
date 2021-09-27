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
    Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useCreateCategoryMutation } from '../../api/categories';
import ColorPicker from '../ColorPicker';

const CreateCategoryForm = ({ isOpen, onClose }: any) => {
    const { projectId }: any = useParams();

    const [name, setName] = useState<string>('');
    const [color, setColor] = useState<string>('');

    const createCategoryMutation = useCreateCategoryMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newCategory = { projectId, name, color };
        createCategoryMutation.mutate(newCategory);
        setName('');
        setColor('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new category</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                focusBorderColor='teal.400'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Color</FormLabel>
                            <Flex>
                                <ColorPicker
                                    setColor={setColor}
                                    color={color}
                                />

                                <Input type='text' value={color} disabled />
                            </Flex>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' colorScheme='teal' mr={3}>
                            Create
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default CreateCategoryForm;

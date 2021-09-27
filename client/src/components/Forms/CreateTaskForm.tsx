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
    Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useCategoryList } from '../../api/categories';
import { useCreateTaskMutation } from '../../api/task';

const CreateTaskForm = ({ isOpen, onClose }: any) => {
    const { projectId }: any = useParams();
    const { data } = useCategoryList(projectId);

    const [name, setName] = useState<string>('');
    const [categoryId, setCategoryId] = useState<string>('');

    const createTaskMutation = useCreateTaskMutation();

    useEffect(() => {
        console.log(categoryId);
    }, [categoryId]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newTask = { name, categoryId };
        createTaskMutation.mutate(newTask);

        setName('');
        setCategoryId('');
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
                            <FormLabel>Category</FormLabel>
                            <Select
                                placeholder='Select category'
                                focusBorderColor='teal.400'
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                {data &&
                                    data.categories.map((c: any) => (
                                        <option key={c.id} value={c.id}>
                                            {c.name.toUpperCase()}
                                        </option>
                                    ))}
                            </Select>
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

export default CreateTaskForm;

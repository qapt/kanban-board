import { DeleteIcon } from '@chakra-ui/icons';
import {
    Text,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

const DeleteButtonAlert = ({
    name,

    handleDelete,
}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<any>();

    return (
        <>
            <Button
                onClick={onOpen}
                variant='solid'
                colorScheme='red'
                size='xs'
            >
                <DeleteIcon />
            </Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Delete Project</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to delete
                        <Text color='red'>{name}</Text> ? This action cannot be
                        reversed.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={handleDelete}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default DeleteButtonAlert;

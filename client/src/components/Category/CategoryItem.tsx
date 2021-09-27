import { Box, Center, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useDeleteCategoryMutation } from '../../api/categories';
import DeleteButtonAlert from '../DeleteButtonAlert';
import TaskList from '../Task/TaskList';

const CategoryItem = ({ category }: any) => {
    const [hover, setHover] = useState<boolean>(false);
    const deleteCategoryMutation = useDeleteCategoryMutation();

    const deleteCategory = (e: any) => {
        e.preventDefault();
        deleteCategoryMutation.mutate(category.id);
    };

    return (
        <>
            <Center py={6}>
                <Box
                    w='full'
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    boxShadow={'lg'}
                    overflow={'auto'}
                    maxH='md'
                    minH='md'
                >
                    <Flex
                        color={useColorModeValue('gray.800', 'white')}
                        onMouseLeave={() => setHover(false)}
                        onMouseOver={() => setHover(true)}
                        justifyContent='space-between'
                        bg={useColorModeValue(
                            `${category.color}.200`,
                            `${category.color}.800`
                        )}
                    >
                        <Text
                            w='full'
                            fontSize={'sm'}
                            fontWeight={600}
                            p={2}
                            color={useColorModeValue('black', 'white')}
                        >
                            {category.name.toUpperCase()}
                        </Text>
                        <Box p={1}>
                            {hover && (
                                <DeleteButtonAlert
                                    name={category.name}
                                    handleDelete={deleteCategory}
                                />
                            )}
                        </Box>
                    </Flex>

                    <Box px={6} mt={3}>
                        <TaskList tasks={category.tasks} />
                    </Box>
                </Box>
            </Center>
        </>
    );
};

export default CategoryItem;

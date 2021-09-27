import { Flex, useColorModeValue, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../api/auth';
import RegisterForm from '../../components/Forms/RegisterForm';

const Register = () => {
    const history = useHistory();
    const { data, isError, isLoading }: any = useCurrentUser();

    if (!isLoading && !isError && data.isLoggedIn) {
        history.push('/dashboard');
    }
    return (
        <Flex
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Heading fontSize={'4xl'}>Create a new account</Heading>
                <RegisterForm />
            </Stack>
        </Flex>
    );
};

export default Register;

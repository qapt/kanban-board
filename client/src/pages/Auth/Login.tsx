import { Flex, useColorModeValue, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../api/auth';
import LoginForm from '../../components/Forms/LoginForm';

const Login = () => {
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
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>

                <LoginForm />
            </Stack>
        </Flex>
    );
};

export default Login;

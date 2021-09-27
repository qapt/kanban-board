import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRegisterUser } from '../../api/auth';
import FormErrors from './FormErrors';

const RegisterForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const registerUserMutation = useRegisterUser();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const newUser = { name, username, email, password };
        registerUserMutation.mutate(newUser);
    };

    useEffect(() => {
        if (
            registerUserMutation.data &&
            registerUserMutation.data.isAxiosError
        ) {
            setErrors(registerUserMutation.data.response.data.error.details);
        }
    }, [registerUserMutation.data]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id='name'>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id='username'>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id='email'>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id='password'>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>

                        <Stack spacing={10}>
                            <Stack
                                direction={{
                                    base: 'column',
                                    sm: 'row',
                                }}
                                align={'start'}
                                justify={'space-between'}
                            >
                                <Link to='/accounts/register'>
                                    <Text color={'blue.400'}>
                                        Already have an account? Log In
                                    </Text>
                                </Link>
                            </Stack>
                            {errors.length > 0 && (
                                <FormErrors errors={errors} />
                            )}

                            <Button
                                type='submit'
                                bg={'teal.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                            >
                                {registerUserMutation.isLoading
                                    ? 'Loading...'
                                    : 'Sign in'}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </form>
        </>
    );
};

export default RegisterForm;

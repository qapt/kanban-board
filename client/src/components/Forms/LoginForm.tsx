import FormErrors from './FormErrors';

import { useEffect, useState } from 'react';
import { useLoginUser } from '../../api/auth';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const loginUserMutation = useLoginUser();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const loginData = { username, password };
        loginUserMutation.mutate(loginData);
    };

    useEffect(() => {
        if (loginUserMutation.data && loginUserMutation.data.isAxiosError) {
            setErrors(loginUserMutation.data.response.data.error.details);
        }
    }, [loginUserMutation.data]);

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
                        <FormControl id='username'>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                <Checkbox>Remember me</Checkbox>
                                <Link to='/accounts/register'>
                                    <Text color={'blue.400'}>
                                        Create new account
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
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </form>
        </>
    );
};

export default LoginForm;

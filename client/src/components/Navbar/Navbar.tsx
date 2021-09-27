import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useCurrentUser, useLogoutUser } from '../../api/auth';
import PrivateButtons from './PrivateButtons';
import PublicButtons from './PublicButtons';

const Navbar = () => {
    const { data }: any = useCurrentUser();
    const useLogoutMutation = useLogoutUser();

    const handleLogout = async () => {
        useLogoutMutation.mutate();
    };

    return (
        <>
            <Box bg={useColorModeValue('gray.300', 'gray.700')} px={4}>
                <Flex h={16} alignItems='center' justifyContent='space-between'>
                    <Box ml={4}>
                        <Link to='/'>
                            <ChatIcon fontSize='xx-large' />
                        </Link>
                    </Box>

                    <Flex alignItems='center'>
                        {data && data.isLoggedIn ? (
                            <PrivateButtons
                                username={data.user.username}
                                handleLogout={handleLogout}
                            />
                        ) : (
                            <PublicButtons />
                        )}
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;

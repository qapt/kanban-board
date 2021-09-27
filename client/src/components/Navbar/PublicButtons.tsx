import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PublicButtons = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box cursor={'pointer'} mx={2}>
                {colorMode === 'light' ? (
                    <SunIcon onClick={toggleColorMode} fontSize='x-large' />
                ) : (
                    <MoonIcon onClick={toggleColorMode} fontSize='x-large' />
                )}
            </Box>
            <Button variant='outline' colorScheme='teal' mr={2} size='sm'>
                <Link to='/accounts/register'>Sign up</Link>
            </Button>
            <Button variant='solid' colorScheme='teal' size='sm'>
                <Link to='/accounts/login'>Log in</Link>
            </Button>
        </>
    );
};

export default PublicButtons;

import { SunIcon, MoonIcon, UpDownIcon } from '@chakra-ui/icons';
import {
    Button,
    Box,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorMode,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PrivateButtons = ({ username, handleLogout }: any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Button
                variant='solid'
                colorScheme='teal'
                size='sm'
                mr={4}
                leftIcon={<UpDownIcon />}
            >
                <Link to='/dashboard'>Dashboard</Link>
            </Button>

            <Box cursor={'pointer'} mx={2}>
                {colorMode === 'light' ? (
                    <SunIcon onClick={toggleColorMode} fontSize='x-large' />
                ) : (
                    <MoonIcon onClick={toggleColorMode} fontSize='x-large' />
                )}
            </Box>

            <Menu>
                <Text>{username}</Text>

                <MenuButton
                    as={Button}
                    rounded='full'
                    variant='link'
                    cursor='pointer'
                >
                    <Avatar size='sm' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default PrivateButtons;

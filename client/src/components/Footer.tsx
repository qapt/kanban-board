import {
    Box,
    useColorModeValue,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.300', 'gray.700')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text>© 2020 Chakra Templates. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    {/* <FaTwitter />
                    <FaYoutube />
                    <FaInstagram /> */}
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;

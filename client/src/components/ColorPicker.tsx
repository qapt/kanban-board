import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverBody,
    SimpleGrid,
    Box,
} from '@chakra-ui/react';

const ColorPicker = ({ color, setColor }: any) => {
    const colors = [
        'gray',
        'red',
        'green',
        'blue',
        'yellow',
        'orange',
        'purple',
        'pink',
    ];

    return (
        <Box mr={4}>
            <Popover variant='picker'>
                <PopoverTrigger>
                    <Button
                        aria-label={color}
                        background={color}
                        height='40px'
                        width='40px'
                        padding={0}
                        minWidth='unset'
                        borderRadius={3}
                        border='1px solid black'
                    ></Button>
                </PopoverTrigger>
                <PopoverContent width='160px'>
                    <PopoverBody>
                        <SimpleGrid columns={4} spacing={2}>
                            {colors.map((c) => (
                                <Button
                                    key={c}
                                    aria-label={c}
                                    background={c}
                                    height='22px'
                                    width='22px'
                                    padding={0}
                                    minWidth='unset'
                                    borderRadius={3}
                                    _hover={{ background: c }}
                                    onClick={() => {
                                        setColor(c);
                                    }}
                                ></Button>
                            ))}
                        </SimpleGrid>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default ColorPicker;

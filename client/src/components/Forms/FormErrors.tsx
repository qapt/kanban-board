import { Box } from '@chakra-ui/layout';

type ErrorProps = {
    errors: string[];
};

const FormErrors = ({ errors }: ErrorProps) => {
    return (
        <>
            {errors && (
                <div style={{ marginTop: '20px' }}>
                    {errors.map((err, i) => (
                        <Box color='red' key={i}>
                            {err}
                        </Box>
                    ))}
                </div>
            )}
        </>
    );
};

export default FormErrors;

import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from '../../components/Sidebar';

const DashboardWrapper = ({ children, empty }: any) => {
    return (
        <Grid
            templateRows='repeat(100, 1fr)'
            templateColumns='repeat(100, 1fr)'
        >
            <GridItem
                bg={useColorModeValue('gray.100', 'gray.900')}
                rowSpan={100}
                colSpan={15}
            >
                <Sidebar />
            </GridItem>
            <GridItem
                rowSpan={5}
                colSpan={85}
                bg={useColorModeValue('gray.100', 'gray.900')}
            >
                {!empty && <DashboardNavbar />}
            </GridItem>
            <GridItem rowSpan={93} colSpan={85}>
                {children}
            </GridItem>
        </Grid>
    );
};

export default DashboardWrapper;

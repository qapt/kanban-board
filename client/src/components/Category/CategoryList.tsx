import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useProjectById } from '../../api/projects';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
    const { projectId }: any = useParams();
    const { data } = useProjectById(projectId);

    return (
        <Grid
            templateRows='repeat(120, 1fr)'
            templateColumns='repeat(100, 1fr)'
            gap={2}
            px={4}
        >
            {data &&
                data.project.categories.map((category: any) => (
                    <GridItem
                        key={category.id}
                        rowSpan={60}
                        colSpan={20}
                        h='100%'
                    >
                        <CategoryItem category={category} />
                    </GridItem>
                ))}
        </Grid>
    );
};

export default CategoryList;

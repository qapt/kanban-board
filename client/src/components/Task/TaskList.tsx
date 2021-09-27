import { List } from '@chakra-ui/react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }: any) => {
    return (
        <List spacing={3}>
            {tasks.map((task: any) => (
                <div key={task.id}>
                    <TaskItem task={task} />
                </div>
            ))}
        </List>
    );
};

export default TaskList;

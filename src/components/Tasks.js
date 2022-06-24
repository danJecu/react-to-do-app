import Task from './Task';

const Tasks = ({ tasks, handleDelete, handleReminder }) => {
    return (
        <div className='grid grid-rows-none w-[50vw] gap-y-3 justify-items-stretch'>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleReminder={handleReminder}
                />
            ))}
        </div>
    );
};

export default Tasks;

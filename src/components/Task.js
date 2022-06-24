import { RiDeleteBack2Fill } from 'react-icons/ri';

const Task = ({ task, handleDelete, handleReminder }) => {
    return (
        <div
            onDoubleClick={() => handleReminder(task.id)}
            className={`
            bg-slate-300
            flex flex-row
            rounded-lg
            h-fit
            font-poppins
            items-center
            text-lg
            pl-4
            select-none
                ${task.reminder ? 'border-indigo-500 border-l-8' : ''}
            `}
        >
            <h4 className='basis-1/2'>{task.title}</h4>
            <p className='basis-1/4'>{task.day}</p>
            <RiDeleteBack2Fill
                className='basis-1/4 text-5xl active:text-6xl hover:text-green-600 active:text-yellow-500 cursor-pointer'
                onClick={() => handleDelete(task.id)}
            />
        </div>
    );
};

export default Task;

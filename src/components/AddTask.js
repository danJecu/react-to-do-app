import { useState } from 'react';

const AddTask = ({ displayTask, addTask }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add task!');
            return;
        }

        addTask({ title, date, reminder });

        setTitle('');
        setDate('');
        setReminder(false);
    };

    return (
        <form
            className={`${
                displayTask ? 'flex' : 'hidden'
            } items-center gap-4 font-poppins p-3 border border-slate-300 rounded-lg`}
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                className='border px-2'
                placeholder='Enter task'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='date'
                className='border px-2'
                placeholder='Enter date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label>Reminder</label>
            <input
                type='checkbox'
                className='accent-pink-500'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
            <button className='bg-black text-white p-1.5 rounded-lg hover:bg-white hover:text-black hover:border border-yellow-500 active:bg-yellow-500'>
                Submit Task
            </button>
        </form>
    );
};

export default AddTask;

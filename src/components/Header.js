const Header = ({ handleDisplay, displayAdd }) => {
    return (
        <div className='flex bg-slate-300 w-[60vw] items-center justify-between rounded-lg mt-7 p-2'>
            <h2 className='pl-4 font-poppins font-extrabold text-3xl'>
                TO-DOS
            </h2>
            <button
                className={`${
                    displayAdd
                        ? 'bg-red-500 hover:bg-red-200 active:bg-red-700 active:text-white'
                        : 'bg-green-500 hover:bg-green-200 active:bg-green-700 active:text-white'
                } rounded-lg p-2`}
                onClick={() => handleDisplay()}
            >
                {`${displayAdd ? 'Close' : 'Add'}`}
            </button>
        </div>
    );
};

export default Header;

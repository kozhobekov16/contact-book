//header for Title
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='rounded-md shadow-slate-800 shadow-lg shadow-cyan-500/10 p-4 flex items-center relative'>
                <p className='text-slate-200 text-4xl title pt-2'>Find all contacts at one place</p>
            </div>
        </div>
    )
};

export default Header;

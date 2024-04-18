import React from 'react'

function Switch({ title, checked, handleSwitch }) {
    return (
        <div className='control'>
            <p>{title}</p>
            <label className='switch' id={title}>
                <input type='checkbox' checked={checked} onChange={handleSwitch} />
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default Switch
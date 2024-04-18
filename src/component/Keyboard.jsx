import React, { useEffect } from 'react'
import KeyButton from './KeyButton';

function Keyboard({ power, bank, play }) {

    return (
        <div className='keyboard'>
            {bank.properties.map((item) => (
                <KeyButton item={item} play={play} key={item.id} power={power} />
            ))}
        </div>
    )
}

export default Keyboard
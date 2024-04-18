import React, { useEffect } from 'react'

function KeyButton({ item, play, power }) {

    const handleKeydown = (e) => {
        if (item.keyCode === e.keyCode) {
            play(item.key, item.id)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
    }, [])

    return (
        <button
            id={item.id}
            disabled={!power}
            className='drum-pad'
            onClick={() => play(item.key, item.id)}
        >
            <audio className="clip" src={item.url} id={item.key} />
            {item.key}
        </button>
    )
}

export default KeyButton
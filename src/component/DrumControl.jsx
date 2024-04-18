import React from 'react'
import Switch from './Switch'

function DrumControl({ data: { power, volume, output, bankType }, handlePowerSwitch, handleBankSwitch, handleVolume }) {
    return (
        <div className='controls-container'>
            <Switch
                title="Power"
                checked={power ? true : false}
                handleSwitch={handlePowerSwitch}
            />
            <p id="display">{output}</p>
            <input
                type="range"
                className='rangeSlider'
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
            />
            <Switch
                title="Bank"
                checked={bankType === "Heater Kit" ? true : false}
                handleSwitch={handleBankSwitch}
            />
        </div>
    )
}

export default DrumControl
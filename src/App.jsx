import './App.scss'
import React, { useCallback, useState } from 'react'
import Keyboard from './component/Keyboard'
import DrumControl from './component/DrumControl'


function App() {
	const banks = [
		{
			name: "Heater Kit",
			properties: [
				{
					keyCode: 81,
					key: 'Q',
					id: 'Heater-1',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
				},
				{
					keyCode: 87,
					key: 'W',
					id: 'Heater-2',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
				},
				{
					keyCode: 69,
					key: 'E',
					id: 'Heater-3',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
				},
				{
					keyCode: 65,
					key: 'A',
					id: 'Heater-4',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
				},
				{
					keyCode: 83,
					key: 'S',
					id: 'Clap',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
				},
				{
					keyCode: 68,
					key: 'D',
					id: 'Open-HH',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
				},
				{
					keyCode: 90,
					key: 'Z',
					id: "Kick-n'-Hat",
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
				},
				{
					keyCode: 88,
					key: 'X',
					id: 'Kick',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
				},
				{
					keyCode: 67,
					key: 'C',
					id: 'Closed-HH',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
				}
			]
		},
		{
			name: "Smooth Piano Kit",
			properties: [
				{
					keyCode: 81,
					key: 'Q',
					id: 'Chord-1',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
				},
				{
					keyCode: 87,
					key: 'W',
					id: 'Chord-2',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
				},
				{
					keyCode: 69,
					key: 'E',
					id: 'Chord-3',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
				},
				{
					keyCode: 65,
					key: 'A',
					id: 'Shaker',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
				},
				{
					keyCode: 83,
					key: 'S',
					id: 'Open-HH',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
				},
				{
					keyCode: 68,
					key: 'D',
					id: 'Closed-HH',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
				},
				{
					keyCode: 90,
					key: 'Z',
					id: 'Punchy-Kick',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
				},
				{
					keyCode: 88,
					key: 'X',
					id: 'Side-Stick',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
				},
				{
					keyCode: 67,
					key: 'C',
					id: 'Snare',
					url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
				}
			]
		}
	]


	const [data, setData] = useState({
		power: true,
		volume: 0.5,
		output: "",
		bankType: "Heater Kit"
	})

	const bank = data.bankType === "Heater Kit" ? banks[0] : banks[1];


	const handlePowerSwitch = (e) => {
		//console.log(e.target.id)
		setData(prev => ({ ...prev, power: e.target.checked, output: "Power " + (e.target.checked ? "On" : "Off") }))
	}

	const handleBankSwitch = (e) => {
		if (e.target.checked) {
			setData(prev => ({ ...prev, bankType: "Heater Kit", output: "Heater Kit" }))
		} else {
			setData(prev => ({ ...prev, bankType: "Smooth Piano Kit", output: "Smooth Piano Kit" }))
		}
	}

	const handleVolume = (e) => {
		setData((prev) => ({ ...prev, volume: e.target.value, output: `Volume: ${e.target.value * 100}` }))
	}

	const play = (key, id) => {
		const audio = document.getElementById(key);
		audio.currentTime = 0;
		audio.volume = data.volume
		audio.play();
		setData((prev) => ({ ...prev, output: id }))
	}

	return (
		<>
			<div id='drum-machine'>
				<div className="wrapper">
					<Keyboard power={data.power} bank={bank} play={play} />
					<DrumControl
						data={data}
						handlePowerSwitch={handlePowerSwitch}
						handleBankSwitch={handleBankSwitch}
						handleVolume={handleVolume}
					/>
				</div>
			</div>
		</>
	)
}

export default App;

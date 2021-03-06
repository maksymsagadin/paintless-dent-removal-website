import React from 'react'
import { GiCarWheel, GiClawHammer, GiGooSpurt } from 'react-icons/gi'
const iconStyle = (Icon) => <Icon size="3rem" color="white" />;

export const featuresData = {
	title: 'Our Services',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	content: [
		{
			name: 'Paintless Dent Repair',
			description: 'Genuinely Dented to Nicest with a few pushes',
			icon: iconStyle(GiClawHammer),
			// image: './assets/features/Network.svg',
		},
		{
			name: 'Fender Shaving',
			description: 'Immaculately sliced fenders for fitment',
			icon: iconStyle(GiCarWheel),
			// image: './assets/features/Speech.svg',
		},
		{
			name: 'Detailing',
			description: 'We help you make your car the nicest',
			icon: iconStyle(GiGooSpurt),
			// image: './assets/features/Fun.svg',
		},
	],
}
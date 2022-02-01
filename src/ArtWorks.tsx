import React from 'react';
import './App.scss';
import stickers from './data/stickersData';

interface StickerDataType {
	name: string;
	url: string;
	image: string;
}

class ArtWorks extends React.Component {
	Sticker = ({ key, item }: { key: string; item: StickerDataType }) => {
		const url = require(`./assets/work_assets/stickers/sticker_${item.image}.png`);

		return (
			<div className='sticker-container'>
				{item.url.length > 0 ? (
					<a
						key={key}
						className='sticker-has-link'
						href={item.url}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='sticker-image'
							src={url}
							alt={`I saved this file as ${item.name} dot png`}
						/>
					</a>
				) : (
					<img
						key={key}
						className='sticker-image'
						src={url}
						alt={`I saved this file as ${item.name} dot png`}
					/>
				)}
			</div>
		);
	};
	render() {
		const item = {
			icon: 'bun_illustration.png',
			title: 'Illustrations',
			subtitle:
				"I'm also an illustrator! I am available for logo/mascot designs, illustration, and conference slide deck. Here are some of my best commissions!",
		};

		return (
			<div id='art-works' className='section-container'>
				<h1>Digital Illustration</h1>
					<p className='section-descriptor'>
					I'm also an illustrator! I am available for logo/mascot designs, illustration, and conference slide deck. Here are some of my best commissions!</p>
					<div className='stickers-container'>
						{stickers.map(el => {
							return <this.Sticker key={el.name} item={el} />;
						})}
					</div>
			</div>
		);
	}
}

export default ArtWorks;
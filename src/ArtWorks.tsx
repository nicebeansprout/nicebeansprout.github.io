import React from 'react';
// @ts-ignore
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import './PageTransition.scss'
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
		var portraits = [];
		for (var i = 1; i <= 12; i++) {
			const url = require(`./assets/work_assets/portraits/portrait_${i}.png`);
			portraits.push(<div className='sticker-container'
			key={'portrait'+i}>
			<img
				className='sticker-image'
				src={url}
				alt='portrait'
			/>
		</div>);
		}

		var emotes = [];
		for (var j = 1; j <= 3; j++) {
			const url = require(`./assets/work_assets/portraits/emote_${j}.png`);
			emotes.push(<div className='emote-container'
			key={'emotes'+j}>
			<img
				className='emotes-image'
				src={url}
				alt='emote'
			/>
		</div>);
		}

		return (
			<div id='art-works' className='section-container page'>
				<a href='/#/' className="returnToCenter">x</a>
				<h1>Digital Illustration</h1>
				<p className='section-descriptor'>
				I'm also an illustrator! I am available for logo/mascot designs, illustration, and conference slide deck. Here are some of my best commissions!</p>
				<a href="https://ko-fi.com/nicebeansprout/commissions#buyCommissionModal" target='_blank' rel="noopener noreferrer" className='button'>Commission Me!</a>
				<Tabs>
					<TabList>
						<Tab>Logo/Mascot</Tab>
						<Tab>Portrait</Tab>
						<Tab>Emotes</Tab>
						<Tab>Live2D</Tab>
					</TabList>
					<TabPanel>
						<p>Email me at nicebeansprout@gmail.com or DM me on twitter <a href="https://twitter.com/nicebeansprout" target='_blank' rel="noopener noreferrer" >@nicebeansprout</a> if you're interested!</p>
						<div className='stickers-container'>
							{stickers.map(el => {
								return <this.Sticker key={el.name} item={el} />;
							})}
						</div>
					</TabPanel>
					<TabPanel>
						<p>Commission for a cartoon portrait is available on my <a href="https://ko-fi.com/nicebeansprout/commissions#buyCommissionModal" target='_blank' rel="noopener noreferrer" >Kofi</a>!</p>
						<div className='stickers-container'>
							{portraits}
						</div>
					</TabPanel>
					<TabPanel>
						<p>Commission for emotes is available on my <a href="https://ko-fi.com/nicebeansprout/commissions#buyCommissionModal" target='_blank' rel="noopener noreferrer" >Kofi</a>!</p>
						<div className='stickers-container'>
							{emotes}
						</div>
						</TabPanel>
					<TabPanel>
						<p>Commission for Live2D art/rig is currently not available.</p>
						<div className="video-item">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/WXzDC8mTjgk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className="video-item">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/n2L2p-nWseE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className="video-item">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/m3vWG4_WdO0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</TabPanel>
				</Tabs>
				
				
			</div>
		);
	}
}

export default ArtWorks;
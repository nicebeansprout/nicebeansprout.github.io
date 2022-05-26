import React from 'react';
import './App.scss';
import './PageTransition.scss'
import webItems from './data/webData';

interface WorkItemType {
	key: string;
	image: string;
	title: string;
	subtitle: string;
	clients: string;
	tools: string;
	url: string;
}

interface Props {
	item: WorkItemType;
}

interface State {
	isExpanded: boolean;
}

class WorkItem extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isExpanded: false,
		};
	}

	toggleItem = () => {
		this.setState(prevState => {
			return {
				isExpanded: !prevState.isExpanded,
			};
		});
	};

	render() {
		const { item } = this.props;
		const url = require(`./assets/work_assets/${item.image}_thumbnail.jpg`);
		const imageStyle = { backgroundImage: `url(${url})` };

		return (
			<div
				className={`item-container ${
					this.state.isExpanded ? 'active' : ''
				}`}>
				<div className='item-image' style={imageStyle} />
				<div className='item-details'>
					<div className='item-details-collapse' />
					<p className='item-name' onClick={this.toggleItem}>
						{item.title}
					</p>
					<div className='item-details-inner'>
						<div>
							<p className='item-tools'>{item.tools}</p>
							<p>{item.subtitle}</p>
						</div>
						<a
							className='item-link'
							href={item.url}
							target='_blank'
							rel='noopener noreferrer'>
							Visit site
						</a>
					</div>
				</div>
			</div>
		);
	}
}

class WebWorks extends React.Component {
	render() {
		return (
			<div id='web-works' className='section-container page'>
					<a href='/#/' className="returnToCenter">x</a>
					<h1>I'm a front-end developer!</h1>
					<p className='section-descriptor'>
						I dabbled into HTML/CSS in high school and here I am! I have experiences with modern JS frameworks like React and Vue. Here are some of my favorite works that I've created over the years.</p>
					<div className='section-items'>
						{webItems.items.map(el => {
							return <WorkItem key={el.key} item={el} />;
						})}
				</div>
			</div>
		);
	}
}

export default WebWorks;
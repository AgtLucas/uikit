import React from 'react';
import ReactDOM from 'react-dom';

import AUtags from './tags.js';


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split">
			<h2>tags without links</h2>

			<AUtags tags={[
				{
					text: 'foo',
				},
				{
					text: 'bar',
				},
				{
					text: 'baz',
				},
				{
					text: 'boing',
				},
			]} />


			<hr />
			<h2>tags with additional classes</h2>

			<AUtags className="testing" tags={[
				{
					text: 'foo',
				},
				{
					text: 'bar',
					className: 'testing',
				},
				{
					text: 'baz',
				},
			]} />


			<hr />
			<h2>tags with links</h2>

			<AUtags tags={[
				{
					link: '#url',
					text: 'foo',
				},
				{
					link: '#url',
					text: 'bar',
				},
				{
					link: '#url',
					text: 'baz',
				},
				{
					link: '#url',
					text: 'boing',
				},
			]} />


			<hr />
			<h2>tags with onclick</h2>

			<AUtags tags={[
				{
					link: '#url1',
					text: 'link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first tag is clicked') },
				},
				{
					link: '#url2',
					text: 'link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second tag is clicked') },
				},
				{
					text: 'nolink',
					onClick: event => { event.preventDefault(); console.log('This function is called when the third tag is clicked') },
				},
				{
					text: 'nolink',
					onClick: event => { event.preventDefault(); console.log('This function is called when the forth tag is clicked') },
				},
			]} />
		</div>
		<div className="split split--dark">
			<h2>tags without links</h2>

			<AUtags dark tags={[
				{
					text: 'foo',
				},
				{
					text: 'bar',
				},
				{
					text: 'baz',
				},
				{
					text: 'boing',
				},
			]} />


			<hr />
			<h2>tags with additional classes</h2>

			<AUtags dark className="testing" tags={[
				{
					text: 'foo',
				},
				{
					text: 'bar',
					className: 'testing',
				},
				{
					text: 'baz',
				},
			]} />


			<hr />
			<h2>tags with links</h2>

			<AUtags dark tags={[
				{
					link: '#url',
					text: 'foo',
				},
				{
					link: '#url',
					text: 'bar',
				},
				{
					link: '#url',
					text: 'baz',
				},
				{
					link: '#url',
					text: 'boing',
				},
			]} />


			<hr />
			<h2>tags with onclick</h2>

			<AUtags dark tags={[
				{
					link: '#url1',
					text: 'link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the first tag is clicked') },
				},
				{
					link: '#url2',
					text: 'link',
					onClick: event => { event.preventDefault(); console.log('This function is called when the second tag is clicked') },
				},
				{
					text: 'nolink',
					onClick: event => { event.preventDefault(); console.log('This function is called when the third tag is clicked') },
				},
				{
					text: 'nolink',
					onClick: event => { event.preventDefault(); console.log('This function is called when the forth tag is clicked') },
				},
			]} />
		</div>
	</div>,

	document.getElementById('root'),
);

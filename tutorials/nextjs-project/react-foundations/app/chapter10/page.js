import LikeButton from './like-button.js';

function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
};

export default function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	return (
		<div>
			<Header title="Develop. Preview. Ship." />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<LikeButton />
		</div>
	);
}

// Doesn't the above simplify what we originally had? Here we created a LikeButton component and rendered it in the browser (since that component is dynamic/reactive) and keeps updating. The above gets compiled into HTML first and then passed to the browser. It's rendered on the server. 
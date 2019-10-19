import Link from 'next/link';

const linkStyle = {
	marginLeft: 15
};

export default class Header extends React.Component {
	render = () => (
		<div>
			<b>Water Watcher</b>

			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>

			<Link href="/about">
				<a style={linkStyle}>About</a>
			</Link>
		</div>
	);
}

import Link from 'next/link';

const linkStyle = {
	marginLeft: 15
};

export default class Header extends React.Component {
	render = () => (
		<div className="header">
			<b>Unbottlr</b>

			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>

			<Link href="/about">
				<a style={linkStyle}>About</a>
			</Link>
		</div>
	);
}

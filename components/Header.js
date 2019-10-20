import Link from 'next/link';

export default class Header extends React.Component {
	render = () => (
		<div className="nav">
			<Link href="/">
				<a className="logo"><img src="pics/inbottlr.png" width="150" height="50"/></a>
			</Link>
			<Link href="/tracker">
				<a className="tracker">TRACKER</a>
			</Link>
			{/* <Link href="/ranking">
				<a className="ranking">RANKING</a>
			</Link> */}
			<Link href="/tips">
				<a className="work">BLOG</a>
			</Link>
			<Link href="/about">
				<a className="contact">ABOUT</a>
			</Link>
			<Link href="/login">
				<a className="login"><img src="pics/user.png" /></a>
			</Link>
			<style jsx>{`
				.nav {
					list-style-type: none;
					background-color: #54724E;
					display: flex;
					flex-direction: row;
					align-items: center;
					margin: 0;
				}
				.tracker, .ranking, .work, .contact, .login{
					margin: 0 0.5 em;
					padding: 14px;
				}
				.logo{
					margin-right: auto;
					padding: 8px;
					color:white;
				}
				.nav a{
					display: block;
					color: white;
					font-family: 'Palanquin Dark', sans-serif;
					padding: 0.1 em 0.5 em;
					margin: 0.3 em;
					font-size: 10px;
				}
				a {
					padding-top: 16px;
					font-family: 'Open Sans', sans-serif;
				}
			`}</style>
		</div>
	);
}

			// <nav>
			// 	<ul id="nav" />
			// 	<li className="logo"><img src="pic/inbottlr.png" width="150" height="50"/></li>
			// 	<li className="track"><a href="tracker.html">TRACKER</a></li>
			// 	<li className="ranking"><a href="ranking.html">RANKING</a></li>
			// 	<li className="work"><a href="tips.html">BLOG</a></li>
			// 	<li className="contact"><a href="about.html">ABOUT</a></li>
			// 	<li className="login"><a href="login.html"><img src="webapp/login.jpg" /></a></li>
			// </nav>

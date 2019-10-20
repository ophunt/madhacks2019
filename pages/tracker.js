import fetch from 'isomorphic-unfetch';
import Head from "next/head";
import Layout from "../components/HeaderedLayout";
import WaterCalculator from "../components/WaterCalculator";
import PlasticCalculator from "../components/PlasticCalculator";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.state.waterCategories = [
			// ["name", litres/unit, plural unit, singular unit]
			["Toilet Flushes", 6, "flushes", "flush"],
			["Minutes Showered", 8, "minutes", "minute"],
			["Baths Taken", 40, "baths", "bath"],
			["Seconds of Sink Use", 0.1, "seconds", "second"],
			["Loads of Laundry", 80, "loads", "load"],
			["Dishwasher Runs", 20, "runs", "run"],
		];

		this.state.plasticCategories = [
			// ["name", litres/unit, plural unit, singular unit]
			["Water Bottles", 15, "bottles", "bottle"],
			["Plastic Wrap", 1.5, "sq. feet", "sq. foot"],
		];
	}

	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/api/owen');
		const test = await res.json();
	 	return { data: test };
	}

	render() {
		return (
			<>
				<Head>
					<title>Unbottlr</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>

				<Layout>
					<p>Track your water use:</p>
					<WaterCalculator categories={this.state.waterCategories} data={this.props.data} />

					<p>Track your plastic use:</p>
					<PlasticCalculator categories={this.state.plasticCategories} data={this.props.data} />
				</Layout>
			</>
		)
    };
}

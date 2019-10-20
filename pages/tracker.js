import WaterCalculator from "../components/WaterCalculator";
import PlasticCalculator from "../components/PlasticCalculator";
import DataManager from "../components/DataManager";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
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
					<WaterCalculator />

					<p>Track your plastic use:</p>
					<PlasticCalculator />

					<DataManager data={this.state}/>
				</Layout>
			</>
		)
    };
}
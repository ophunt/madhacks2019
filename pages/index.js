import Layout from "../components/HeaderedLayout";
import WaterCalculator from "../components/WaterCalculator";
import PlasticCalculator from "../components/PlasticCalculator";

export default class Index extends React.Component {

	render() {
		return (
			<Layout>
				<p>Track your water use:</p>
				<WaterCalculator />

				<p>Track your plastic use:</p>
				<PlasticCalculator />
			</Layout>
		)
	};
}

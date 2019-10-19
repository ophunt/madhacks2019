import Layout from "../components/HeaderedLayout";
import WaterCalculator from "../components/WaterCalculator";

export default class Index extends React.Component {

	render() {
		return (
			<Layout>
				<p>Track your water use:</p>
				<WaterCalculator />
			</Layout>
		)
	};
}

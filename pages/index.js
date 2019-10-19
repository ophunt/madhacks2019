import Layout from "../components/HeaderedLayout";
import Counter from "../components/Counter";

export default class Index extends React.Component {
	render = () => (
		<Layout>
			<p>Track your water use:</p>
			<Counter name="Toilet Flushes"/>
			<Counter name="Minutes Showered"/>
		</Layout>
	);
}

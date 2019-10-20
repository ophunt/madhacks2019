import Calculator from "../components/Calculator";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.categories = props.categories;
	};

	render() {
		return (
			<Calculator categories={this.categories} mainUnit="litres" mainUnitShort="L" />
		)
	};
}

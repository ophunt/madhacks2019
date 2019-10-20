import Calculator from "./Calculator";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.categories = props.categories;
	};

	render() {
		return (
			<Calculator categories={this.categories} mainUnit="grams" mainUnitShort="g" />
		)
	};
}

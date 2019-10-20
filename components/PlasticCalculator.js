import Calculator from "./Calculator";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.categories = [
			// ["name", litres/unit, plural unit, singular unit]
			["Water Bottles", 15, "bottles", "bottle"],
			["Plastic Wrap", 1.5, "sq. feet", "sq. foot"],
		];
	};

	render() {
		return (
			<Calculator categories={this.categories} mainUnit="grams" mainUnitShort="g" />
		)
	};
}

import Calculator from "../components/Calculator";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.categories = [
			// ["name", litres/unit, plural unit, singular unit]
			["Toilet Flushes", 6, "flushes", "flush"],
			["Minutes Showered", 8, "minutes", "minute"],
			["Baths Taken", 40, "baths", "bath"],
			["Seconds of Sink Use", 0.1, "seconds", "second"],
			["Loads of Laundry", 80, "loads", "load"],
			["Dishwasher Runs", 20, "runs", "run"],
		];
	};

	render() {
		return (
			<Calculator color="blue" categories={this.categories} mainUnit="litres" mainUnitShort="L" />
		)
	};
}

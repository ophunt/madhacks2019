import Counter from "../components/Counter";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		let categories = [
			// ["name", litres/unit, unit]
			["Toilet Flushes", 6, "flushes"],
			["Minutes Showered", 8, "minutes"],
			["Baths Taken", 40, "baths"],
			["Seconds of Hand Washing", 0.1, "seconds"],
			["Loads of Laundry", 80, "loads"],
			["Times Dishwasher Run", 20, "runs"],
		];

		this.state = {};

		for (let i in categories) {
			let category = categories[i];
			this.state[category[0]] = {multiplier: category[1], units: category[2], count: 0};
		};

		this.updateCount = this.updateCount.bind(this);
	};

	updateCount(n, i) {
		const categoryName = Object.keys(this.state)[i];
		const categoryObj = this.state[categoryName];
		const newCategoryObj = { ...categoryObj, count: n};

		this.setState({[categoryName]: newCategoryObj});
	}

	render() {
		return (
			<>
			{
				Object.keys(this.state).map((value, index) => {
					return <Counter
						key={index} index={index}
						name={value} obj={this.state[value]}
						updateCount={this.updateCount}
					/>
				})
			}
			</>
		)
	};
}

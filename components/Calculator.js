import fetch from 'isomorphic-unfetch';
import Counter from "../components/Counter";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		let categories = props.categories;

		let categoryCounts = props.data;

		for (let i in categories) {
			let category = categories[i];
			this.state[category[0]] = {
				multiplier: category[1],
				units: category[2],
				unit: category[3],
				count: categoryCounts[category[0]] || 0,
				mainUnit: props.mainUnit,
				mainUnitShort: props.mainUnitShort,
			};
		};

		this.updateCount = this.updateCount.bind(this);
	};

	updateCount(n, i) {
		const categoryName = Object.keys(this.state)[i];
		const categoryObj = this.state[categoryName];
		const newCategoryObj = { ...categoryObj, count: n};

		this.updateSaveData("owen", categoryName, n);

		this.setState({[categoryName]: newCategoryObj});
	};

	updateSaveData(user, dataKey, dataValue) {
		let data = {};
		data[dataKey] = dataValue;

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "api/data", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			"user": user,
			"data": data
		}));
	};

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

				<p className="total">
				Total Used: <b>{Math.round(Object.keys(this.state).map((value, index) => {
					let obj = this.state[value];
					return obj.multiplier * obj.count;
				}).reduce((prev, curr) => prev + curr, 0) * 10) / 10}</b> {this.props.mainUnit} used
				</p>

				<style jsx>{`
					.total {
						text-align: right;
						margin: 10px;
						border-top: 3px solid black;
						padding-top: 5px;
					}
				`}</style>
			</>
		);
	};
}

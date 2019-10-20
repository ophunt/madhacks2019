export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.subtract = this.subtract.bind(this);
		this.add = this.add.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	subtract() {
		this.updateCount(Math.max(0, this.props.obj.count - 1));
	}

	add() {
		this.updateCount(this.props.obj.count + 1);
	}

	handleChange(e) {
		this.updateCount(parseInt(e.target.value) || 0);
	}

	updateCount(n) {
		this.props.updateCount(n, this.props.index);
	}

	render() {
		let totalCount = Math.round(this.props.obj.multiplier * this.props.obj.count * 10) / 10

		return (
			<div className="counter">
				<p className="label">{this.props.name}</p>
				<button id="subtract" onClick={this.subtract}>-</button>
				<input type="text" value={this.props.obj.count} onChange={this.handleChange}/>
				<p className="units">{this.props.obj.units}</p>
				<button id="add" onClick={this.add}>+</button>
				<p className="total">
					x<b>{this.props.obj.multiplier}</b> {this.props.obj.mainUnitShort} / {this.props.obj.unit} =
				</p>
				<p className="total"><b>{totalCount}</b> {this.props.obj.mainUnit} used</p>

				<style jsx>{`
					.counter {
						border: 1px solid blue;
						border-radius: 5px;
						display: flex;
						margin: 5px;
					}

					.counter > * {
						display: inline-block;
						float: right;
						margin: 5px;
					}

					.counter > p.label {
						margin-right: auto;
					}

					.counter > p.units {
						width: 60px;
					}

					.counter > p.total {
						width: 140px;
						text-align: right;
					}

					button {
						border-radius: 5px;
						cursor: pointer;
					}

					button:focus {
						outline: 0px;
					}

					button#add {
						border: 1px solid green;
						background-color: lightgreen;
					}

					button#subtract {
						border: 1px solid red;
						background-color: lightcoral;
					}

					input {
						width: 60px;
						text-align: right;
					}
				`}</style>
			</div>
		);
	}
}

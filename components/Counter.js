export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0};

		this.subtract = this.subtract.bind(this);
		this.add = this.add.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	subtract() {
		this.setState((state, props) => ({
			count: Math.max(0, state.count - 1)
		}));
	}

	add() {
		this.setState((state, props) => ({
			count: state.count + 1
		}));
	}

	handleChange(event) {
		this.setState({
			count: parseInt(event.target.value) || 0
		});
	}

	render() {
		return (
			<div className="counter">
				<p>{this.props.name}</p>
				<button className="subtract" onClick={this.subtract}>-</button>
				<input type="text" value={this.state.count} onChange={this.handleChange}/>
				<button className="add" onClick={this.add}>+</button>

				<style jsx>{`
					.counter {
						border: 1px solid blue;
						display: flex;
						margin: 5px;
					}

					.counter > * {
						display: inline-block;
						float: right;
						margin: 5px;
					}

					.counter > p {
						margin-right: auto;
					}

					button {
						border-radius: 5px;
					}

					button.add {
						border: 1px solid green;
						background-color: lightgreen;
					}

					button.subtract {
						border: 1px solid red;
						background-color: lightcoral;
					}
				`}</style>
			</div>
		);
	}
}

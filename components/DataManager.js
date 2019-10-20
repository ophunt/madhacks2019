export default class DataManager extends React.Component {
	render() {
		return (
			<div className="dataManager">
				<p>Save</p>
				<p>Load</p>

				<style jsx>{`
					.dataManager > * {
						display: inline-block;
						margin: 10px;
						border: 1px solid orange;
						padding: 5px;
						cursor: pointer;
					}
				`}</style>
			</div>
		);
	}
}

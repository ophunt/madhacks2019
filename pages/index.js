import Layout from "../components/HeaderedLayout";

export default class Index extends React.Component {
	render = () => 
	(
		<Layout>
			
		<div className="body">
			<blockquote>
				<div id="one01" className="examplebox">
					<table cellspacing="13">
						<tr>
							<th colspan="3">Project Management</th>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</table>
				</div>
			</blockquote>
			<br /><br /><br /><br />
			<footer>Copyright © 2019 by</footer>
			<style jsx>{`
				.body {
					background-color: white;
					background-position: right center;
					margin-left: auto;
					background-repeat: no-repeat;
					margin-right: auto;
					padding-right: 0px;
					padding-left: 0px;
				}
				h1 {
					color: darkolivegreen;
					font-size: 45px;
					text-align: center;
					font-family: 'Mansalva', cursive;
				}
				h4 {
					padding-top: 24px;
					text-decoration: underline;
					font-family:'Open Sans', sans-serif;
					clear: both;
				}
				p {
					line-height: 150%;
					padding-top: 14px;
					font-family: 'Open Sans', sans-serif;	
				}
				
				#intro{
					display: flex;
					flex-direction:column;
					flex-wrap:wrap;
				}
				
				footer {
					padding-top: 64px;
					padding-bottom: 64px;
					font-size: 12px;
					color: olive;
					text-align: center;
					font-family: 'Open Sans', sans-serif;
				}
				th, td {
					border: 2px  groove ;
					border-color:darkgreen;
				
				}
				table{
					width: 100%;
					font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
				}
				th{
					height: 50px;
				}
				td{
					width: 50%;
					height: 300px;
				}
				table h4, table p{ 
					align-content: center;
				}
				iframe {
					padding-top: 30px;
					padding-left: 120px;
					border-style: dotted;
				}
				form {
					padding-right: 250px;
					padding-left: 250px;
					font-family: 'Open Sans', sans-serif;
				}
				blockquote{
					background-color:#f3f0e1;
					color:#464C42; 
					text-align: center; 
					padding-top: 10px;
					padding-bottom: 10px;
					margin: auto;
					font-family: 'Open Sans', sans-serif;
					float:inherit;
					border-radius: 4px;
					border: 2px solid black;
					margin: 8px;
				} 
				#bling {
					float: left;
					position: fixed;
				}
				.blueText {
					color:blue;
					background-color:lightblue;
				}
				
				#blueText {
					color: blueviolet;
					background-color: lightpink;
				}
				
				.onebox {
					border: 2px solid darkorange;
					border-radius: 2px;
					width:150px;
					padding: 0px 10px 0px 10px;
					margin: 15px 5px 15px 5px; 
					background-color: lightgoldenrodyellow;
					color:darkorange;
				}
				
				/* for playing with the buttons */
				.onebutton {
					width:100px;
					height:30px;
					border-radius: 5px;
					border: 2px solid black;
					margin: 8px;
				}
				#track_button,#profile{
					width:300px;
					height:30px;
					border-radius: 5px;
					border: 2px solid black;
					margin: 8px;
					color: pink;
				}
				.container {
					position: relative;
					width: 500px;
				}
				.container div {
					height: 300px;
				}
				
				.column-left {
					width: 33%;
					left: 0;
					position: absolute;
				}
				.column-center {
					width: 34%;
					margin-left: 33%;
					position: absolute;
				}
				.column-right {
					width: 33%;
					right: 0;
					position: absolute;
				}
				
				td{
					width: 30%;
					height: 300px;
					border-spacing: 10px;
				}
				tr{
					height: 300px;
					border-spacing: 5em;
				}
			`}</style>
	</div>
	</Layout>
	);
}

import Layout from "../components/HeaderedLayout";
export default class Tips extends React.Component {
	render = () => (
	<Layout>
	<div className="body">
	<img src="pics/howtodo@2x.png" alt="Go Green Love Environment" width="1200" />
    <blockquote>
      <h1>Hey! MadHacks 2019</h1>
      <p><strong>UNBOTTLR</strong> is a webapp tracker to raise the awareness of environment protection and energy saving. </p>
		<p>Climate change is a very serious topic that everyone should attach great importance to!</p>
		<p>Our team appreciate MadHacks to provide us the opportnuity to come up with this brilliant idea and implement it within 24 hours!</p>
    </blockquote>
		<br/>
		<footer>
			<p>Created by Holly Chen, Owen Hunt, Clarence Kuo, Yu-Tai Chen</p>
			<p>Copyright © 2019 by UNBOTTLR </p>
		</footer>
   <style jsx>{`
					.body {
						background-color: white;
						background-position: right center;
						margin-left: auto;
						background-repeat: no-repeat;
						margin-right: auto;
						padding-right: 20px;
						padding-left: 20px;
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
					
					.track,.ranking, .work, .contact, .login{
						margin: 0 0.5em;
						padding: 7px;
					}
					.logo{
						margin-right: auto;
						padding: 8px;
					}

					#intro{
						display: flex;
						flex-direction:column;
						flex-wrap:wrap;
					}
					ul li {
						padding-top: 16px;
						font-family: 'Open Sans', sans-serif;
						list-style-type: none;
					}
					footer {
						padding-top: 64px;
						padding-bottom: 64px;
						font-size: 12px;
						color: olive;
						text-align: center;
						font-family: 'Open Sans', sans-serif;
					}
					
					table{
						width: 100%;
						font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
					}
					.table1{
						width: 40%;
						font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
						margin-top: 20px;   
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
					
					.blueText {
						color:blue;
						background-color:lightblue;
					}
					
					/* this defines a style for an ID */
					#blueText {
						color: blueviolet;
						background-color: lightpink;
					}
					
					/* a simple box style to play with */
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
						margin-top: 10px;
						margin-left: 33%;
						height: 2000px;
					   
						border: 2px solid black;
					}
					.column-right {
						width: 33%;
						margin-right: 0;
						position: absolute;
					}
					
					/* Clear floats after the columns */
					
					
					td{
						width: 30%;
						height: 300px;
						border-spacing: 10px;
						object-position:center;
					}
					tr{
						height: 300px;
						border-spacing: 5em;
					}
					.profile_table{
						margin-left: 100px;
					}
					.intro{
						width: 1000px;
					}
					.waste{
						padding-left: 100px;
					}
					/* Clear floats after the columns */
					
				`}</style>
	</div>
	</Layout>
);
}

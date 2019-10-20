<<<<<<< HEAD
import Layout from "../components/HeaderedLayout";

export default class Index extends React.Component {
	render = () => 
	(
		<Layout>
        <div className="body">
        <table class="table1" cellSpacing="25">
            <th><a href="https://pubs.usgs.gov/circ/1441/circ1441.pdf"><img src="pic/preview1.png " width="300" height="320" /> </a></th>
            <th><a href="https://blog.ferrovial.com/en/2015/03/how-many-litres-of-water-does-a-person-need-per-day"><img src="pic/preview2.png " width="300" height="300"/> </a></th>
            <th><a href="https://www.titlemax.com/discovery-center/lifestyle/trash-one-person-produces-year/"><img src="pic/preview3.png " width="300" height="300" /></a></th>
        </table>
		<br/><br/><br/><br/>
		<footer><p>Copyright © 2019 by </p></footer>
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
        table{
            width: 100%;
            font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
        }
        .table1{
            width: 50%;
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
        `}
        </style>
        </div>
        </Layout> 
    )
};
=======
export default class Tips extends React.Component {
	render() {
		return (
			<div>Empty</div>
		)
	}
}
>>>>>>> 8735e31b4ea786c1f3bc3f3b7e3683407a81fd30

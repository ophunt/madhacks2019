import Layout from "../components/HeaderedLayout";

export default class Index extends React.Component {
	render = () => 
	(
		<Layout>
        <div className="body">
		<img id="ranking-photo" src="pic/ranking-pic.png" alt="contribute & save our planet" width="500" height="1400"/>
		<br/>
		<br/>
	    <h1>        Welcome, Name</h1>
        <style jsx>{`
        .body {
            background-color: white;
            background-position: left;
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
            padding-left: 20px;
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
        
        #nav{
            list-style-type: none; /*remove bullets*/
            background-color: #54724E;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0;
        }
        .track,.ranking, .work, .contact, .login{
            margin: 0 0.5em;
            padding: 7px;
        }
        .logo{
            margin-right: auto;
            padding: 8px;
        }
        #nav a{
            display: block;
            color: white;
            font-family: 'Palanquin Dark', sans-serif;
            padding: 0.1em 0.5em;
            margin: 0.3em;
            font-size: 10px;
        }
        header img {
            width: 100%;
        }
        
        #nav a:hover {
            color: #2980b9;
            transition: 0.1s linear;
            }
        #ranking-photo{
            float: left;
        }
        
        `}</style>
        </div>
        </Layout>
    )

};
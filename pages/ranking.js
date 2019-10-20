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
        </div>
        </Layout>
    )

};
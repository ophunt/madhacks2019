<<<<<<< HEAD
export default class Login extends React.Component {
    render = () => (
        <div className="body">
            <img src="pic/inbottlr.png" alt="logo" width="250" height="120" />
            <br />
            <form action="action_page.php">
                <div className="two_container">
                    <div className="container">
                        <h1>Getting Started</h1>
                        <p>Already have an account? <a href="login.html">Sign in</a></p>
                        <br />
                        <br />
                        <label for="email"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" required />

                        <label for="psw"><b>Email</b></label>
                        <input type="password" placeholder="Enter Email" name="email" required />

                        <label for="psw-repeat"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <br />
                        <button type="submit" className="registerbtn">Sign Up</button>
                        <br />
                        <br />
                        <p>By signing up, you agree to <strong>UNBOTTLR</strong>’s <a href="home.html">Terms of Conditions</a> and <a href="home.html">Privacy Policy</a></p>
                    </div>
                    <div id="pic"></div>
                </div>
            </form>
            <br /><br /><br /><br />
            <style jsx>{`
		@import url("login.css");
        * {box-sizing: border-box}
        .body{
                background-image:url("pic/signin.png");
                background-position: right;
                background-size: 700px 900px;
                background-repeat: no-repeat;
                }
        .container {
            padding: 16px;
            float: left;
            width: 40%;
            }
        input[type=text], input[type=password] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            display: inline-block;
            border: none;
            background: #f1f1f1;
        }
               
        input[type=text]:focus, input[type=password]:focus {
            background-color: #ddd;
            outline: none;
            }

        hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
        }
                    
        .registerbtn {
            background-color: #4CAF50;
            color: white;
            padding: 16px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
            opacity: 0.9;
        }
        .registerbtn:hover {
            opacity:1;
            }
        a {
            color: dodgerblue;
        }
        #pic{
            float:right;
        }
        #login{
            float:right;
        }
		`}</style>
        </div>
    );
}
=======
export default class SignUp extends React.Component {
	render() {
		return (
			<div>Empty</div>
		)
	}
}
>>>>>>> 8735e31b4ea786c1f3bc3f3b7e3683407a81fd30

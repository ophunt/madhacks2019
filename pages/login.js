export default class Login extends React.Component {
    render = () => (
        <div className="body">
            <img src="pics/inbottlr.png" alt="logo" width="250" height="120" />
            <form action="hackathon/action_page.php">
                <div className="two_container">
                    <div className="container">
                        <h1>Log in</h1>
                        <p>Don't have an account? <a href="signup.html">Register Here</a></p>
                        <br /><br />
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="">Forgot Password?</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="">Forgot Email?</a>
                        <br /><br /><br /><br />
                        <button type="submit" className="registerbtn">Log in</button>
                    </div></div>
            </form>
            <br /><br /><br /><br />
            <style jsx>{`
					* {box-sizing: border-box}
                    .body{
                        backgroundImage:url("pics/leaf.png");
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
                    
                    /* Overwrite default styles of hr */
                    hr {
                      border: 1px solid #f1f1f1;
                      margin-bottom: 25px;
                    }
                    
                    /* Set a style for the submit/register button */
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
                    p{
                      font-size: 13px;
                    }
				`}</style>
        </div>
    );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'


const Login = () => {

    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')
    const navigate = useNavigate(' ')

    const onLogin = () => {
        const usernamePasswordCredentials={username,password}
        if (username.length === 1) {
            toast.warning('Please Enter Email')
        } else if (password.length === 1) {
            toast.warning('Please Enter Password')
        } else {
            
            axios.post("http://localhost:8080/login",usernamePasswordCredentials)
                .then((response) => {
                    // read the json response sent by server
                 //   const result = response.data

                    console.log(response.data);
                    if (response.data.roles != null ) {
                        toast.success('Welcome to my Application')

                        // get the data from the result
                       // const { username, password, token } = response.data['data']
                       const access_token= response.data.access_token
                       localStorage.setItem("access_token",access_token);
                      // setAuthToken(token);

                        // cache properties inside session storage
                        // if the keys do not exist, then they will get created with the current values
                        // if exist then the values will get overwritten
                        sessionStorage['username'] = username
                        sessionStorage['password'] = password
                        sessionStorage['access_token'] = access_token

                        // go to home component
                        navigate('/home')
                        // window.location.href="/home";
                    }
                    else {
                        toast.error('Roll is null')
                    }
                })
                .error((err) =>
                    console.log(err),
                    toast.error('Invalid email or password')
                    ,usernamePasswordCredentials.clear()
                )
        }
    }


return (
    <div>

        <h2 className="page-title">Login</h2>
        <hr />
        <form>
            <div className="form-group">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                        type="email" placeholder="Enter your username" className="form-control"
                    />
                </div>
            </div>

            <div className="form-group">
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        type="password" placeholder="******" className="form-control"
                    />
                </div>
            </div>

            <div>
                <p>Already have an Account? CreateAccount <Link to={"/CreateAccount"}>here</Link> </p>
                <button onClick={onLogin} type="button" class="btn btn-outline-success">Login</button>
                &emsp;
                <button type="reset" class="btn btn-outline-warning">Reset</button>

            </div>
        </form>
    </div>
)

}

export default Login;
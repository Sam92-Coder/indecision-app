import React,{Component} from 'react';
import '../css/style.css';



const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


class Login extends Component{
    constructor(props){
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        alert('data was submitted: ' + this.state.value);

    }

    render(){
        return(
            
            <div className="container">
                <div className="headerText">Samhub Technologies</div>
                <hr/>

                <div className="form-container">
                    <div className="login-image"></div>
                    <h3>Admin Login</h3>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={this.state.value} onChange = {this.handleChange} placeholder="Enter Email" className=""/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.value} onChange = {this.handleChange} placeholder="Enter Password" className=""/>
                        </div>
                        <div className="submit">
                            <input type="submit" name="submit" value="Login"/>
                        </div>

                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login;
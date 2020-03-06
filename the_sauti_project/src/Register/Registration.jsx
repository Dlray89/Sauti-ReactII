import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Card, CardContent, Button } from "@material-ui/core";


import { actionUser } from "../actions";





class Register extends React.Component {
    constructor(props) {
        super(props)
        

        this.state = {
            user: {
              
                userName:"",
                password: ""
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true});

        const { user } = this.state;

        if(user.userName && user.password ) {
            this.props.register(user)
        }
    }

    render(){
        const { registering } = this.props;
        const { user, submitted = this.state} = this.state;

        return(
                <div>
                    
                    <form onSubmit={this.handleSubmit}>
                    <Card style={{background: "linear-gradient(to left, #bdc3c7, #2c3e50)",borderRadius:"30px", border: "solid 2px #6f0000", width: "30%", textAlign: "center", margin: " 0 auto", marginTop: "5%"}}>
                   
                        <CardContent>
                       <h2>Register</h2>
                    
                        <div className={ "form-group" + ( submitted && !user.userName? "has error" : '')}>
                           
                            <TextField
                            id="userName"
                            type="text" 
                            name="userName"
                            label="Create a Username"
                            className="form-control"
                            value={user.userName}
                            onChange={this.handleChange}
                            />
                            { submitted && !user.userName &&
                            <div> Username is Required</div> 
                            }
                        </div>
                        <div className={ " form-group " + ( submitted && !user.password ? " has error" : '')}>
                            
                            <TextField
                            id="password"
                            type="password" 
                            label="Create a Password"
                            name="password"
                            className="form-control"
                            value={user.password}
                            onChange={this.handleChange}
                            />
                            { submitted && !user.password &&
                            <div> password is Required</div> 
                            }
                        </div> 
                        <div  style={{width: "60%", textAlign: "center", margin: " 4% auto"}}>
                         
                      
                            <Button>Submit</Button>
                           {registering}
                        <Button><Link style={{color:"#6f0000"}} to="/login"> Cancel</Link></Button>
                        </div> 
                        </CardContent>
                    </Card>
                        
                    </form>
                </div>

        )
    }
    
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering }
}

const actionCreator = {
    register: actionUser.register
}

const connectedRegister = connect(mapState, actionCreator)(Register)
export { connectedRegister as Register}
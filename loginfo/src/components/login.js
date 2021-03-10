import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
    avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    },

    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },

    });

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

        }

        handleChange(e) {
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
            fields
            });
            
            }
            submituserRegistrationForm(e) {
                e.preventDefault();
                if (this.validateForm()) {
                let fields = {};
                 
                fields["emailid"] = "";
                 
                fields["password"] = "";
                this.setState({fields:fields});
                alert("Login submitted");
                }
                
                }
                
                validateForm() {
                
                let fields = this.state.fields;
                let errors = {};
                let formIsValid = true;
                
                 
                if (!fields["emailid"]) {
                formIsValid = false;
                errors["emailid"] = "*Please enter your email";
                }
                
                if (typeof fields["emailid"] !== "undefined") {
                //regular expression for email validation
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email";
                }
                }
                
                
                if (!fields["password"]) {
                formIsValid = false;
                errors["password"] = "*Please enter your password.";
                }
                
                if (typeof fields["password"] !== "undefined") {
                if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
                }
                }
                
                this.setState({
                errors: errors
                });
                return formIsValid;
                
                
                }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
            
            <div  className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form onSubmit= {this.submituserRegistrationForm}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="emailid" 
                  value={this.state.fields.emailid} 
                  onChange={this.handleChange}
                />
                <div className="errorMsg" style={{color:"red"}}>{this.state.errors.emailid}</div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  name="password" 
                  value={this.state.fields.password} 
                  onChange={this.handleChange}
                  id="password"
                />
                <div className="errorMsg" style={{color:"red"}}>{this.state.errors.password}</div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                //   onClick={()=> this.handleSubmit()}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        )
    }
}

export default withStyles(styles)(Login);

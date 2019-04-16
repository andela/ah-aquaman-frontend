import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import ResetForm from "../../components/resetPassword/resetPasswordForm";
import resetPasswordAction from "../../actions/resetAction/resetPasswordActions";
import ChangeForm from "../../components/resetPassword/changePasswordForm";
import changePasswordAction from "../../actions/resetAction/changePasswordActions";
import CircularProgressLoader from "../../commons/progressLoader";

export class ResetPasswordView extends Component {
        state = {
          email: "",
          password: "",
          confirmPassword: "",
          disabled: true,
          errors: {
            email: "",
          },
          loader: {
            loading: false,
          },
        };
    
        componentWillReceiveProps(nextProps) {
          if (nextProps.detail) {
            toast.error("User associated with that email does not exist.", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: false,
              pauseOnHover: true,
            });
          } else {
            toast.success("Please check your email for the reset password link.", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: false,
              pauseOnHover: true,
            });
          }
          this.setState({ loader: { loading: false } });
        }

    validateEmail = (email) => {
      if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
        this.setState({
          errors: {},
        });
        return (false);
      }
      this.setState({
        errors: {
          email: "Please enter a correct email address.",
        },
      });
      return (true);
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });   
      if (e.target.name === "email") {
        this.setState({ disabled: this.validateEmail(e.target.value) }); 
      }  
    }

    handleSubmit = (e) => {
      e.preventDefault();  
      const { email } = this.state;
      this.props.resetPasswordAction(email);
      this.setState({ loader: { loading: true } });
    }

    handlePasswordSubmit = (e) => {
      e.preventDefault();
      const { password, confirmPassword } = this.state;
        
      if (password !== confirmPassword) {    
        toast.error("Passwords do not match!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      } else {
        const password = this.state.password;
        const token = this.props.match.params.token;
        this.props.changePasswordAction(password, token);
        toast.success("You have reset your password successfully, please login.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
        this.props.history.push("/login");
      } 
    }

    render() {
      const loader = this.state.loader;
    
      if (this.props.match.params.token !== undefined) {
        return (
          <div>
            <ChangeForm
              onChange={this.onChange} 
              onSubmit={this.handlePasswordSubmit} 
            />
          </div>
        );
      }
      
      return (
        <div>
          <ResetForm 
            onChange={this.onChange} 
            onSubmit={this.handleSubmit} 
            disabled={this.state.disabled} 
            emailError={this.state.errors.email} 
          />
          <CircularProgressLoader {...loader} />
        </div>
      
      );
    }
}

const mapStateToProps = state => ({
  message: state.resetPasswordReducer.message,
  detail: state.resetPasswordReducer.detail,
});

export default connect(mapStateToProps, 
  { resetPasswordAction, changePasswordAction })(ResetPasswordView);

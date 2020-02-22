import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResetPassword from "./password/ResetPassword";

class User extends React.Component {
    state = {
        loginUsername: '',
        loginPassword: '',
        recoveryEmail: '',
        currPass: '',
        newPass: '',
        confirmNewPass: '',
        show: false,
        showChangePass: false
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    handleShowChangePass = () => {
        this.setState({
            showChangePass: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleCloseChangePass = () => {
        this.setState({
            showChangePass: false
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <header>
                    <nav className="adminHeader text-white fixed-top ">
               <div>
               <strong>MTL</strong>
                <small>Mziki wetu Tamaduni zetu Ladha zetu</small>
               </div>
               <button className="btn btn-success">
                   <i className="fa fa-user"></i>
               </button>
                    </nav>
                </header>
            {/* ************************************************************************************************************ */}
                
                <div className="row">
                {/* LOGIN SECTION */}
               <div className="col-lg-5 col-sm-7 m-auto">
               <div className="card bg-primary text-center card-form">
                   <div className="card-body">
                       <h3 className="text-light">Sign In</h3>
                       <p className="userLogFeed"></p>
                   <form>
                        <div className="form-group">
                            <input className="form-control" type="text" name="loginUsername" placeholder="Username" value={this.state.loginUsername} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="loginPassword"  placeholder="Password" value={this.state.loginPassword} onChange={this.handleChange}/>
                        </div>
                        <input className="btn btn-outline-light btn-block" type="submit" value="Login"/>
                        <p className="form-group "><a  className="text-light" onClick={this.handleShow}>Forgot Password?</a></p>
                        <p className="form-group "><a  className="text-light" onClick={this.handleShowChangePass}>Change Password?</a></p>
                    </form>
                   </div>
                   {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                   {/* FORGOT PASSWORD MODAL */}
                   <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Get Reset Password Link</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Recovery E-mail" className="form-control" onChange={this.handleChange} name="recoveryEmail" value={this.state.recoveryEmail}/>
                            </div>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>
                            Discard
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                           Send
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                   {/* CHANGE PASSWORD MODAL */}
                   <Modal show={this.state.showChangePass} onHide={this.handleCloseChangePass}>
                        <Modal.Header closeButton>
                        <Modal.Title>Change Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input type="password" placeholder="Current Password" className="form-control" onChange={this.handleChange} name="currPass" value={this.state.currPass}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="New Password" className="form-control" onChange={this.handleChange} name="newPass" value={this.state.newPass}/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChange} name="confirmNewPass" value={this.state.confirmNewPass}/>
                            </div>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={this.handleCloseChangePass}>
                            Ignore
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                           Change
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
               </div>
                </div>
            </div>
        )
    }
}
export default User;
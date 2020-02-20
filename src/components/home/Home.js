import React from "react";
import io from 'socket.io-client';
// import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

class Home extends React.Component {
    state = {
        username: '',
        password: '',
        show: false
    }
    handleShow = () => {
        this.setState({
            show : true
        }
        )
    }
    handleClose = () => {
        this.setState({
            show : false
        }
        )
    }
    handleSubmit = () => {
        const socket = io.connect('http://localhost:7002/auth/create-user');
        const username = this.state.username;
        const password = this.state.password;
        socket.emit('admin', {username, password});
        this.setState({ show : false});
        socket.on('notadmin', (data) => {
            if (data.msg === 'Unauthorized') {
                console.log('unathorized')
                return;
            }
        })
        socket.on('isadmin', (data) => {
            if (data.msg === 'Admin') {
                return window.location.href='http://localhost:3000/admin';
            }
        })
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <Button variant="primary" onClick={this.handleShow}>
                        Admin Login
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Username" className="form-control" onChange={this.handleChange} name="username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChange} name="password"/>
                            </div>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                           Login
                        </Button>
                        </Modal.Footer>
                    </Modal>
                
            </div>
        )
    }
}
export default Home;
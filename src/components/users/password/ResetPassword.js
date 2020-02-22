import React from 'react';

class ResetPassword extends React.Component {
    state = {
        newPass: '',
        confirmNewPass: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return (
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
            <div className="row">
                {/* LOGIN SECTION */}
               <div className="col-lg-5 col-sm-7 m-auto">
               <div className="card  text-center card-form"></div>
            <div className="card-body">
            <h3 className="">Sign In</h3>
            <p className="userLogFeed"></p>
        <form>
                 <div className="form-group">
                     <input type="password" placeholder="New Password" className="form-control" onChange={this.handleChange} name="newPass" value={this.state.newPass}/>
                 </div>
                 <div className="form-group">
                     <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChange} name="confirmNewPass" value={this.state.confirmNewPass}/>
                 </div>
                 <input type="submit" value="Reset Password" className="btn btn-outline-primary btn-block" />
         </form>
        </div>
        </div>
        </div>
        </div>
        )
    }
}
export default ResetPassword;
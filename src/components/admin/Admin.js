import React from "react";
import './Admin.css'
class Admin extends React.Component {
    handleCollapse = (e) => {
        document.querySelector('.myNavbar').style.display="block";
    }
    render(){
        return(
            <div className="mainDiv">
                <header>
                    <nav className="adminHeader text-white">
               <div>
               <strong>MTL</strong>
                <small>Mziki wetu Tamaduni zetu Ladha zetu</small>
               </div>
               <button className="btn btn-success">
                   <i className="fa fa-user"></i>
               </button>
                    </nav>
                </header>
                {/* PART ONE */}
                <div className="row">
                    <div className="col-md-2 bg-dark color">
                        <form className="mt-3 ml-3">
                            <div className="form-group">
                                <input type="text" placeholder="Search..." className="form-control"/>
                            </div>
                        </form>
                            <ul className="navbar-nav text-center ">
                                <li><a className="nav-link" href="#"><i className="fa fa-home"></i>Home</a></li>
                                <li><a className="nav-link" href="#"><i className="fa fa-users"></i>Users</a></li>
                                <li><a className="nav-link" href="#"><i className="fa fa-file"></i>Videos</a></li>
                                <li><a className="nav-link" href="#"><i className="fa fa-file"></i>Audios</a></li>
                                <li><a className="nav-link" href="#"><i className="fa fa-file"></i>Images</a></li>

                            </ul>
                    </div>
                    {/* Create user form */}
                     <div className="col-md-3 col-sm-4">
                        <form className="ml-3 mt-5">
                            <div className="form-group">
                        <input className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="E-mail"/>
                            </div>
                            <div className="form-group">
                        <input  placeholder="Gender" name="gender" type="radio" value="male"/>Male
                        <input  placeholder="Gender" type="radio" name="gender" value="female"/>Female
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="Role"/>
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="Address"/>
                            </div>
                            <button className="btn btn-primary">Register</button>
                        </form>
                     </div>
                     {/* end of user form */}

                     {/* list of users */}
                     <div className="col-md-7 col-sm-8">
                        <table className="table table-striped table-hover bg-light text-center mt-3">
                            <thead className="">
                                <tr className="text-muted">
                                <th>#</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr><tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr><tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item disabled">
                                    <a href="#" className="page-link py-2 px-3">
                                       ...
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                     </div>
                     {/* end of list of users */}
                </div>
                {/* END PART ONE */}
                {/* START PART TWO */}
                <div className="row bg-light">
                    {/*  THE LATEST FOUR VIDEOS*/}
                    <div className="col-md-8">
                        <h4>Latest Videos</h4>
                        <div className="d-flex justify-content-between">
                        <div className="card">
                            <div className="card-body">
                                 <div className="d-flex">
                                     <video src="" alt="Video" controls>
                                         <p>Your browser does not support HTML5 video</p>
                                     </video>
                                 </div>
                                 <div>
                                     <span>Title</span><br/>
                                     <small>01/12/2019</small>
                                 </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                 <div className="d-flex">
                                     <video src="" alt="Video" controls>
                                         <p>Your browser does not support HTML5 video</p>
                                     </video>
                                 </div>
                                 <div>
                                     <span>Title</span><br/>
                                     <small>01/12/2019</small>
                                 </div>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between">
                        <div className="card">
                            <div className="card-body">
                                 <div className="d-flex">
                                     <video src="" alt="Video" controls>
                                         <p>Your browser does not support HTML5 video</p>
                                     </video>
                                 </div>
                                 <div>
                                     <span>Title</span><br/>
                                     <small>01/12/2019</small>
                                 </div>
                            </div>
                        </div><div className="card">
                            <div className="card-body">
                                 <div className="d-flex">
                                     <video src="" alt="Video" controls>
                                         <p>Your browser does not support HTML5 video</p>
                                     </video>
                                 </div>
                                 <div>
                                     <span>Title</span><br/>
                                     <small>01/12/2019</small>
                                 </div>
                            </div>
                        </div>
                        </div>
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>Prev</span>
                                    </a>
                                </li>
                                <li className="page-item disabled">
                                    <a href="#" className="page-link py-2 px-3">
                                       ...
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>  
                    {/* END OF LATEST VIDEOS */}

                    {/* START OF VIDEO SELECTION INPUT AND ITS PREVIEW */}
                    <div className="col-md-4">
                        <h4>Preview</h4>
                    <div className="card">
                            <div className="card-header">
                                <i className="fa fa-plus fa-2x btn btn-primary" title="Select a video"></i>
                            </div>
                            <div className="card-body" style={{height: "250px"}}></div>
                        </div>
                        </div>  
                </div>
            </div>  
        )
    }
}
export default Admin;
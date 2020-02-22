import React from "react";
import { Modal, Button, Carousel } from 'react-bootstrap';
import './Admin.css'
class Admin extends React.Component {
    state = {
        fName:'',
        lName: '',
        email: '',
        role: '',
        address: '',
        gender: '',
        fileurl: '',
        show: false,
        articleBody: '',
        articleTitle: '',
        imgUrl: ''
    }

    file= React.createRef();
    img = React.createRef();
    handleArticle = () => {
        const articleTitle = this.state.articleTitle;
        const articleBody = this.state.articleBody;
        this.props.addArticle(articleTitle, articleBody);
        this.setState({ show : false});
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
    handleOpen = () => {
        this.file.current.click()
    }
    handleImageOpen = () => {
        this.img.current.click();
    }
    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const firstName = this.state.fName;
        const lastName = this.state.lName;
        const email = this.state.email;
        const role = this.state.role;
        const address = this.state.address;
        const gender = this.state.gender;
        this.props.addUser(firstName, lastName, email, gender, role, address);
        this.setState({
            fName:'',
            lName: '',
            email: '',
            role: '',
            address: '',
            gender: ''
        })
    }
    handleVideo = () => {
        this.props.addVideo(this.file.current.files[0]);
    }
    handleImageSave = () => {
        this.props.addImage(this.img.current.files[0]);
        document.querySelector('.forth-portion img').style.display="none"
    }
    handleImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.className='imagePrev';
            const filename = this.img.current.files[0].name;
            const imgUrl = img.src;
            this.setState({imgUrl})
        document.querySelector('.forth-portion').innerHTML=`<img src=${img.src} title=${filename} />`
        }
        reader.readAsDataURL(e.target.files[0])
    }
    handleFile = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            const audio = new Audio();
            audio.src = reader.result;
            audio.className='myPrev';
            const filename = this.file.current.files[0].name;
            const fileurl = audio.src;
            this.setState({fileurl})
        document.querySelector('.img').innerHTML=`<video src=${audio.src} title=${filename} controls></video>`
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render(){
        const users = this.props.users.map((user, i) => (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td>{user.address}</td>
            </tr>
        ));
        const videos = this.props.videos.map((video, i) => (
            <div className="card" key={i}>
                <div className="card-body">
                        <div className="d-flex">
                            <video src={video.video_url} alt="Video" controls>
                                <p>Your browser does not support HTML5 video</p>
                            </video>
                        </div>
                        <div>
                            <span>{video.title}</span><br/>
                            <small>{video.date}</small>
                        </div>
                </div>
            </div>
        ))
        const images = this.props.images.map((image, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-flex"
                src={image.image_url}
                alt={image.image_title}
              />
              <Carousel.Caption style={{color:'#444'}}>
                 <h3>{image.image_title}</h3>
                <p>{image.created_on}</p>
              </Carousel.Caption>
            </Carousel.Item>
        ))
        const audios = this.props.audios.map((audio, i) => (
            <div className="card" key={i}>
                <div className="card-body">
                        <div className="d-flex">
                            <audio src={audio.audio_url} alt="audio" controls>
                                <p>Your browser does not support HTML5 audio</p>
                            </audio>
                        </div>
                        <div>
                            <span>{audio.title}</span><br/>
                            <small>{audio.date}</small>
                        </div>
                </div>
            </div>
        ))
        const articles = this.props.articles.map((article, i) => (
            <div key={i}>
                
                <h1>{article.article_title.split(' ')[0]} <span>{article.article_title.split(' ')[1]}</span></h1>
                    <p>
                        {article.article}
                     </p>
                     <p><strong>{article.user_role}</strong><br/>
                     <small>{article.created_on}</small></p>
                </div>
        ))
        return(
            <div className="mainDiv">
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
                                <li><a className="nav-link" href="#"><i className="fa fa-file"></i>Articles</a></li>

                            </ul>
                    </div>

                    {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    USER FORM
                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     */}
                    {/* Create user form */}
                     <div className="col-md-3 col-sm-4">
                        <form className="ml-3 mt-5" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                        <input className="form-control" placeholder="First Name"
                        onChange={this.handleUserInput}
                        name="fName"
                        value={this.state.fName}
                        />
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="Last Name"
                        onChange={this.handleUserInput}
                        name="lName"
                        value={this.state.lName}
                        
                        />
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="E-mail"
                        onChange={this.handleUserInput}
                        name="email"
                        value={this.state.email}

                        />
                            </div>
                            <div className="form-group" name="gender" 
                        onChange={this.handleUserInput}

                            >
                        <input  placeholder="Gender" name="gender" type="radio" value="male"/>Male
                        <input  placeholder="Gender" type="radio" name="gender" value="female"/>Female
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="Role"
                        onChange={this.handleUserInput}
                        name="role"
                        value={this.state.role}

                        />
                            </div>
                            <div className="form-group">
                        <input className="form-control" placeholder="Address" 
                        onChange={this.handleUserInput}
                        value={this.state.address}
                        name="address"
                        />
                            </div>
                            {/* <button className="btn btn-primary">Register</button> */}
                            <input className="btn btn-outline-primary btn-block" value="Register"/>
                        </form>
                     </div>
                     {/* end of user form */}
                      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    ENDOF USER FORM
                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     */}

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
                           <tbody>{users}</tbody> 
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
                        <div className="grid">
                        {videos}
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
                        <h4>Video Preview</h4>
                    <div className="card">
                            <div className="card-header">
                            <div className="form-group">
                        <input className="form-control" placeholder="First Name" type="file" hidden
                        onChange={this.handleFile}
                        ref={this.file}
                        />
                            </div>
                                <i className="fa fa-plus fa-2x btn btn-primary" title="Select a video" onClick={this.handleOpen}></i>
                            </div>
                            <div className="card-body img" style={{height: "250px"}}></div>
                            <div className="card-footer"><button type="button" onClick={this.handleVideo}>Add</button></div>
                        </div>
                        </div>  
                </div>
                {/* THIRD PORTION */}
                <div className="row">
                    <div className="third-portion text-center">
                    <Button variant="primary" onClick={this.handleShow}>
                        Add Article
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Create Article</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Article Title" name="articleTitle" onChange={this.handleUserInput}/>
                                </div>
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder="Enter Article..." name="articleBody"  onChange={this.handleUserInput}></textarea>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleArticle}>
                           Add
                        </Button>
                        </Modal.Footer>
                    </Modal>
                            {articles}
                         </div>
               
                </div>
                {/* END OF THIRD PORTION */}
                {/* FORTH PORTION */}
                <div className="row">
                    <div className="container forth-portion d-flex justify-content-center align-items-center">
                <Carousel>
                    {images}
                    </Carousel>  
                    </div>
                    <input className="form-control" placeholder="First Name" type="file" hidden
                        onChange={this.handleImage}
                        ref={this.img}/>
                    <Button variant="primary"  onClick={this.handleImageOpen}>
                        Select Image
                    </Button>
                    <Button variant="primary"  onClick={this.handleImageSave}>
                        Save Image
                    </Button>
                </div>
                {/* END OF FORTH PORTION */}

                {/* FIFTH PORTION */}
                <div className="row">
                    <div className="jumbotron text-center">
                    {audios}
                    </div>
                </div>
                {/* END OF FIFTH PORTION */}

                {/* FOOTER */}
                <footer>
                    <nav className="navbar navbar-expand-lg text-center bg-dark text-white" >
                    <p>Your browser does not support HTML5 audio</p>

                    </nav>
                </footer>
                {/* END FOOTER */}
            </div>  
        )
    }
}
export default Admin;

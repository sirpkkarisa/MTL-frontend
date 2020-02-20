import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';

//images
import img3 from './images/art3.jpg';

//audio
import aud1 from './audios/Susumila_Ft_Mbosso_-_Sonona_(Official_Video)(720p).mp3'
class App extends React.Component{
    state = {
        users:[],
        videos : [],
        articles: [],
        images: [{
            id:1,
            image_url: img3,
            title: 'Idah',
            date: Date().toLocaleLowerCase(),
        }]
    }
    componentDidMount() {
        //GET ALL USERS
        axios.get('http://localhost:7002/auth/users')
            .then(
                (res) => {
                    this.setState({
                        users: res.data.data
                    })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
            //GET ALL VIDEOS
            axios.get('http://localhost:7002/videos')
            .then(
                (res) => {
                    this.setState({
                        videos: res.data.data
                    })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
            //GET ALL ARTICLES
            axios.get('http://localhost:7002/articles')
            .then(
                (res) => {
                    this.setState({
                        articles: res.data.data
                    })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
            // GET ALL IMAGES
            axios.get('http://localhost:7002/images')
            .then(
                (res) => {
                    this.setState({
                        images: res.data.data
                    })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    audios = [
        {
            id:4,
            audio_url: aud1,
            title: 'Sonona',
            date: Date().toLocaleLowerCase(),
        }
    ];
    addUser = (firstName, lastName, email, gender, role, address) => {
        axios.post('http://localhost:7002/auth/create-user', {
                firstName,
                lastName,
                email,
                gender,
                role,
                address
        },{
            onUploadProgress: e => {
                console.log('Complete: '+Math.round(e.loaded/e.total *100)+'%')
            }
        })
        .then(
            (res) => {
                 console.log(res.data)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
    addVideo = (file) => {
        const fd = new FormData();
        fd.append('videoTitle',file.name);
        fd.append('authorId','b8b8fe94-1bdd-4f99-90fa-7012940b1d8c');
        fd.append('userRole','admin');
        fd.append('video',file, file.name);

        axios.post('http://localhost:7002/videos', fd, {
            onUploadProgress: e => {
                console.log(`Completed: ${Math.round(e.loaded/e.total * 100)}%`)
            }
        })
        .then(
            (res)=> {
                this.setState({
                    videos:  [...this.state.videos, res.data.data.video[0]]
                })
            }
        )
        .catch(
            (error) => console.log(error)
        )
    }
    addImage = (image) => {
        const fd = new FormData();
        fd.append('userRole','admin');
        fd.append('authorId','b8b8fe94-1bdd-4f99-90fa-7012940b1d8c');
        fd.append('imageTitle',image.name);
        fd.append('image',image, image.name);
        document.querySelector('.forth-portion img').style.display="flex"
        axios.post('http://localhost:7002/images', fd, {
            onUploadProgress: e => {
                console.log(`Completed: ${Math.round(e.loaded/e.total * 100)}%`)
            }
        })
        .then(
            (res)=> {
                this.setState({
                    images:  [...this.state.images, res.data.data.image[0]]
                })
            }
        )
        .catch(
            (error) => console.log(error)
        )
    }
    addArticle = (title, article) => {
        axios.post('http://localhost:7002/articles',{
            articleTitle: title,
            article,
            authorId: 'b8b8fe94-1bdd-4f99-90fa-7012940b1d8c',
            userRole: 'Admin'
        })
        .then(
            (res) => {
                this.setState({
                    articles:  [...this.state.articles, res.data.data.article[0]]
                })
            }
        )
        .catch(
            (error) => console.log(error)
        )
    }
   render() {
       return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/admin" render ={
            () => (
            <Admin 
            users = {this.state.users} 
            videos = {this.state.videos} 
            images = {this.state.images} 
            audios = {this.audios} 
            articles = {this.state.articles}
            addUser = {this.addUser}
            addVideo = {this.addVideo}
            addArticle = {this.addArticle}
            addImage = {this.addImage}
            />
            )
        }/>
    </Router>
)
   }
    }
export default App;
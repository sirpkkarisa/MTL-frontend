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
                // this.setState({
                //     users: [...this.state.users,{
                //         firstName,
                //         lastName,
                //         email,
                //         gender,
                //         role,
                //         address
                //     }]
                // })
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
        // console.log(gender+'\n'+role+'\n'+address)
        // this.setState({
        //     users: [...this.state.users,{
        //         id: 10,
        //         name: firstName,
        //         email,
        //         gender,
        //         role,
        //         address
        //     }]
        // })
    }
    addVideo = (file) => {
        const fd = new FormData();
        // fd.append('videoTitle',title);
        fd.append('userRole','admin');
        fd.append('video',file, file.name);

        axios.post('http://localhost:7002/videos', fd, {
            onUploadProgress: e => {
                console.log(`Completed: ${Math.round(e.loaded/e.total * 100)}%`)
            }
        })
        .then(
            (res)=> console.log(res)
        )
        .catch(
            (error) => console.log(error)
        )
        // this.setState({
        //     videos: [...this.state.videos, {
        //         id: 5,
        //         title,
        //         video_url,
        //         date: Date()
        //     }]
        // })
    }
    addImage = (title, image_url) => {
        this.setState({
            images: [...this.state.images, {
                id: 5,
                title,
                image_url,
                date: Date()
            }]
        })
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
        // this.setState({
        //     articles: [...this.state.articles, {id:1,title,article, author: 'John Doe'}]
        // })
    }
   render() {
       return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/admin" render ={
            () => (
            <Admin 
            users={this.state.users} 
            videos={this.state.videos} 
            images={this.state.images} 
            audios={this.audios} 
            articles={this.state.articles}
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
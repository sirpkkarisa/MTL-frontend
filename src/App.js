import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home/Home';
import Admin from './components/admin/Admin';

//videos
import corazon  from './videos/GIMS_-_Corazon_ft._Lil_Wayne_&_French_Montana_(Clip_Officiel)(720p).mp4';
import Sonona from './videos/Susumila_Ft_Mbosso_-_Sonona_(Official_Video)(720p).mp4';
import Unknown from '/home/pascal/Projects/MTL/client/src/videos/TRIM_20191218_122525.mp4';
import Vinka from '/home/pascal/Projects/MTL/client/src/videos/Vinka_-_Chips_Na_Ketchup_4K_(Official_Video)(360p).mp4';

//images
import img1 from './images/art1.jpg';
import img2 from './images/art2.jpg';
import img3 from './images/art3.jpg';
import img4 from './images/art4.jpg';

//audio
import aud1 from './audios/Susumila_Ft_Mbosso_-_Sonona_(Official_Video)(720p).mp3'
class App extends React.Component{
    users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'jd@yahoo.com',
            gender: 'male',
            role: 'admin',
            address: 'Nairobi'
        }, {
            id: 2,
            name: 'Jane Doe',
            email: 'jane@yahoo.com',
            gender: 'female',
            role: 'artist',
            address: 'Nyahururu'
        } ,{
            id: 3,
            name: 'Pascal K.',
            email: 'pk@gmail.com',
            gender: 'male',
            role: 'admin',
            address: 'Nakuru'
        }, {
            id: 4,
            name: 'Kazungu Karisa',
            email: 'kk@gamil.com',
            gender: 'male',
            role: 'artist',
            address: 'Nairobi'
        }, {
            id: 5,
            name: 'Esther G.',
            email: 'jd@yahoo.com',
            gender: 'female',
            role: 'admin',
            address: 'Mombasa'
        } ,{
            id: 6,
            name: 'Ian Oburu',
            email: 'ian@hotmail.com',
            gender: 'male',
            role: 'artist',
            address: 'Nairobi'
        }, {
            id: 7,
            name: 'Ruth C',
            email: 'ruth@yahoo.com',
            gender: 'female',
            role: 'artist',
            address: 'Kericho'
        }, {
            id: 8,
            name: 'Suleiman Juma',
            email: 'juma@gmail.com',
            gender: 'male',
            role: 'artist',
            address: 'Mombasa'
        }, {
            id: 9,
            name: 'Mike Korir',
            email: 'korir@yahoo.com',
            gender: 'male',
            role: 'artist',
            address: 'Kericho'
        },
    ];

    videos = [
        {
            id:1,
            // video_url: './videos/GIMS_-_Corazon_ft._Lil_Wayne_&_French_Montana_(Clip_Officiel)(720p).mp4',
            video_url: corazon,
            title: 'Corazon',
            date: Date().toLocaleLowerCase(),
        },
        {
            id:2,
            video_url: Sonona,
            title:'Sonona',
            date: Date().toLocaleLowerCase(),
        }, {
            id:3,
            video_url: Unknown,
            title: 'Unknown',
            date: Date().toLocaleLowerCase(),
        }, {
            id:4,
            video_url: Vinka,
            title: 'Chips na Ketchup',
            date: Date().toLocaleLowerCase(),
        }
    ]
    images = [
        {
            id:1,
            image_url: img1,
            title: 'Corazon',
            date: Date().toLocaleLowerCase(),
        },
        {
            id:2,
            image_url: img2,
            title:'Sonona',
            date: Date().toLocaleLowerCase(),
        }, {
            id:3,
            image_url: img3,
            title: 'Unknown',
            date: Date().toLocaleLowerCase(),
        }, {
            id:4,
            image_url: img4,
            title: 'Chips na Ketchup',
            date: Date().toLocaleLowerCase(),
        }
    ];
    audios = [
        {
            id:4,
            audio_url: aud1,
            title: 'Chips na Ketchup',
            date: Date().toLocaleLowerCase(),
        }
    ];
    articles = [
        {
            id:1,
            title: 'Lorem ipsam',
            article: ` Lorem ipsum dolor sit amet consectetur adipisicing eli
            t. Harum, id quaerat sunt provident tenetur nemo eius molliti
            a culpa. Beatae quibusdam nostrum natus! Velit nulla, necessitatibu
            s quia, repellendus illum, asperiores similique dolore enim iste dol
            orem vitae incidunt fugiat? Tempora corporis quos iusto quod velit q
            uam nemo minus, ut cupiditate quisquam laboriosam, rati
            one architecto consectetur, omnis ab autem possimus perspiciatis at ex quae
            rat deserunt soluta placeat libero. Non repellat cupiditate libero 
            obcaecati asperiores, modi, id quisquam quae doloremque quasi reprehenderit iure?
             Eius minus rerum unde doloremque repellendus enim animi, autem maiores odio necessitatibus non 
             placeat quas nam accusantium! Incidunt eos deserunt veniam! `,
            author: 'John Doe',
            date: Date().toLocaleLowerCase(),
        }
    ];
   render() {
       return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/admin" render ={
            () => (
            <Admin users={this.users} videos={this.videos} images={this.images} audios={this.audios} articles={this.articles}/>
            )
        }/>
    </Router>
)
   }
    }
export default App;
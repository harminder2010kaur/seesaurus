import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';
import img404 from '../assets/image404.jpg';


export default class Images extends Component{ 
    state = {
        src : ''               
    }  
    
    componentDidMount()
    {
        console.log(this.props.word);
        this.getAnImage();  
    }
    componentDidUpdate(prevProps, prevState)
    {        
        if(prevProps.word !== this.props.word)
        {
        console.log(this.props.word);
        this.getAnImage(); 
        }
    }

    getAnImage(){          
        let index = 0;
        let topic = this.props.word;
        let url =  `https://api.unsplash.com/search/photos?query=${topic}&client_id=a32f42f8baabb91842329d23dd0f23f6fd5908d29c74fa309d58fac279eb44d8`;
        let src = '';
        axios.get(url)
        .then(({data:{results}})=>{
            let url = ""+results[index].urls.regular;            
            console.log(url);
            src = url;
            this.setState({src: src});
        })
        .catch(error=>{
            console.log(img404);

            src=img404;
            this.setState({src: src});
        } );
    }
    
    render()
    {
        return(
            <>
            <img src={this.state.src} className="content__data--img" alt="test"/>

            </>
        );
    }
}
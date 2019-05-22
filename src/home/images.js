import React, { Component } from 'react';
import axios from 'axios';
import './styles/style_image.scss';
import img404 from '../assets/image404.jpg';


export default class Images extends Component{ 
    state = {
        src : ''               
    }  
    
    componentDidMount()
    {
        this.getAnImage();  
    }
    componentDidUpdate(prevProps, prevState)
    {        
        if(prevProps.word !== this.props.word)
        {
        this.getAnImage(); 
        }
    }

    getAnImage(){          
        let topic = this.props.word;
        let url =  `https://api.unsplash.com/search/photos?query=${topic}&client_id=a32f42f8baabb91842329d23dd0f23f6fd5908d29c74fa309d58fac279eb44d8`;
        let src = '';
        axios.get(url)
        .then(({data:{results}})=>{
            let index = Math.floor(Math.random()*(results.length-1));
            let url = ""+results[index].urls.regular;   
            src = url;
            this.setState({src: src});
        })

        .catch(error=>{
            src=img404;
            this.setState({src: src});
        } );
    }
    
    render(){
        const style = {
            backgroundImage:`url(${this.state.src})`
        }
        return(
            
                <div className="display__card">
                    <div style={style} className="display__card-image"></div>
                    <h2 className="display__card-word">{this.props.word}</h2>
                </div>
        );
    }
}
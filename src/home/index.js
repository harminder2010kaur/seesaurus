import React, { Component } from 'react';
import axios from 'axios';
import MainForm from './form';
import './style.scss';
import Images from './images';

export default class Dictionary extends Component{ 
    state = {
        treasure: []               
    }   
    
    
    submit = event =>{
        event.preventDefault();
        const word = event.target.word.value;

        axios.get(`http://words.bighugelabs.com/api/2/bc515c6dcbf6b6005f1e3c3f732caadc/${word}/json`)
             .then(response => {                                
                let data=  response.data.noun.syn;
                this.setState({treasure:data});
            })
            .catch(error => {
                console.log(`Oops there is some technical glitch please refer error: ${error}`);
            })
    }


    render()
    {
        return(
            <>
            <MainForm submit={this.submit} />
            
            {this.state.treasure.map((word,index) => {
                return (
                    <div className="content">
                        <div className="content__data">                            
                            <div className="content__data--img" key={index}>                                                        
                                <Images word={word}/>                                
                            </div>
                            <div className="content__data--word">{word}</div>  
                        </div>  
                    </div>    
                )
            }
            )}
            
            </>
        );
    }
}
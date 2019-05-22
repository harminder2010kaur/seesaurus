import React, { Component } from 'react';
import axios from 'axios';
import MainForm from './form';
import './styles/style.scss';
import Images from './images';
import yoshi from '../assets/SFX/yoshi.mp3'
import kirby from '../assets/SFX/kirby.mp3';
import main from '../assets/SFX/main.mp3';
import pokemon from '../assets/SFX/pokemon.mp3'
import bg_kirby from '../assets/bg/kirby-bg.png';
import bg_kirby2 from '../assets/bg/kirby2-bg.png';
import bg2 from '../assets/bg/egg-bg.jpg';
import bg3 from '../assets/bg/header-bg.jpg';
import bg4 from '../assets/bg/header2-bg.png';
import bg5 from '../assets/bg/bg3.jpg';
import bg6 from '../assets/bg/header2-bg.jpg';
import bg7 from '../assets/bg/header4-bg.jpg';
import bg8 from '../assets/bg/header3-bg.png';
export default class Main extends Component{ 
    state = {
        treasure: [],
        modeArr:['syn','verb','meta'],
        mode:'main',

    }   
    
    switchMode = (mode) => {
        this.setState({mode:mode});
    }
    
    submit = event =>{
        event.preventDefault();
        const word = event.target.word.value;
        setTimeout(()=>{
                
                axios.get(`http://words.bighugelabs.com/api/2/bc515c6dcbf6b6005f1e3c3f732caadc/${word}/json`)
                     .then(response => {          
                         const mode = this.state.mode;
                         let data = [];
                         if(mode === 'syn' && response.data.noun.syn)
                             data =  response.data.noun.syn;
                         if(mode === 'meta' && word)
                              data =  [word,word,word,word,word,word];
                         if(mode === 'verb' && response.data.verb.syn) 
                              data = response.data.verb.syn;
                        let tempArr = [];
                        for(let i = 0; i < 6; i ++){
                            tempArr.push(data[i]);
                        }
                        while(tempArr.length!==6){
                            tempArr.push('nada');
                        }
                        this.setState({treasure:tempArr});
                    })
                    .catch(error => {
                        console.log(`Oops there is some technical glitch please refer error: ${error}`);
                        let tempArr = [];
                        while(tempArr.length!==6){
                            tempArr.push('nada');
                        }
                        this.setState({treasure:tempArr});

                    })
    
            },6000);
    }

    whatToPlay = () =>{
        const mode = this.state.mode;
        if(mode === 'meta'){
            return (<div><audio  ref= {audio=>this.audio=audio}  autoPlay loop><source src={kirby} type="audio/mpeg" />Your browser sucks</audio></div>)
            
        }
        else if(mode === 'syn'){
            return (<header><audio ref= {audio=>this.audio=audio} className="yoshi" autoPlay loop><source src={yoshi} type="audio/mpeg" />Your browser sucks</audio></header>)

            // return (<audio autoPlay loop><source src={kirby} type="audio/mpeg" />Your browser sucks</audio>)
            // return (<img/>)
        }
        else if(mode === 'verb'){
            // return (<audio autoPlay loop><source src={kirby} type="audio/mpeg" />Your browser sucks</audio>)
            return (<section><audio ref= {audio=>this.audio=audio} autoPlay loop><source src={pokemon} type="audio/mpeg" />Your browser sucks</audio></section>)

            // return (<img/>)
        }
        else{
            return (<audio preload="auto" ref= {audio=>this.audio=audio} autoPlay loop><source src={main} type="audio/mpeg" />Your browser sucks</audio>)
        }
    }

    whatToSearch = ()=>{
        const mode = this.state.mode;
        let term = ' nothing';
        if(mode==='meta')
            return ' the word itself!'
        if(mode ==='syn')
            return ' its synonymous.'
        if(mode ==='verb')
            return ' the synonymous of its verb.'
        else 
            return term;
    }

    componentDidMount(){
        // this.setState({state:this.state});
        console.log(this.audio);
    }
    render()
    {
        let bg = bg3;
        let src = main;
        let cl = 'black';
        let hdbg = bg3;
        const mode = this.state.mode;
        if(mode === 'meta'){
            bg =bg_kirby;
            cl = 'pink';
            hdbg = bg4;
        }
        if(mode === 'syn'){
            bg =bg5;
            hdbg = bg6;
            cl = 'Chartreuse';
        }
        if(mode === 'verb'){
            bg =bg8;
            hdbg = bg2;
            cl = 'red';
        }
        let styles_body = {
               backgroundImage: `url(${bg})`,
            //    backgroundRepeat  : 'no-repeat',
               backgroundPosition: 'center',
               width:`100%`,
               height:`1400px`
               
        }
        
        let styles_header = {
            color : cl
        }

        let styles_header_ds = {
            color : cl,
            width:`100%`,
            marginBottom:`2rem`
        }

        let styles_top = {
            backgroundImage: `url(${hdbg})`
        }
        return(
            <div style ={styles_body} className = 'body'>
            {/* <audio autoPlay loop><source src={src} type="audio/mpeg" />Your browser sucks</audio> */}
            {this.whatToPlay()}
            <div className='top' style = {styles_top}>
                <h1 className="header" style={styles_header}>Seesaurus #</h1>
                <MainForm submit={this.submit} mode={this.switchMode} />
                <h2 className="display__header" style={styles_header_ds}>You have searched{this.whatToSearch()}</h2>                                                      
            </div>
            <div className="display">
            {this.state.treasure.map((word,index) => {
                return (                          
                     <Images word={word}/>                                
                )
            }
            )}
            </div>   
            </div>
        );
    }
    componentDidUpdate(){
    }
}
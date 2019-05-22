import React, { Component } from 'react';
import axios from 'axios';
import './styles/style_form.scss';
import Search_Icon from '../assets/icon/search.png';
// import Dice from './dice.js'
import img0 from  '../assets/icon/start.png';
import img1 from '../assets/icon/meta.png';
import img2 from '../assets/icon/yoshi.png';
import img3 from '../assets/icon/egg3.png';
import img4 from '../assets/icon/dinosaur-eye.png';


export default class MainForm extends Component {     

    state = {
        face:[img1,img2,img3],
        src:img4,
        counter:5,
        mode:''
      }


    swap = (a) => {
        const counter = 0;
        let res = Math.floor(Math.random()*3);
        if(res===3)res=2;
        // return  this.state.face[res]; 
        this.setState({src:this.state.face[res]})
        
      }
    
      swapping= () =>{
          let counter = 12;
          const a = setInterval(()=>{
          //new
          let src = this.state.src;
          if(counter === 12){
              src = img1;
          }
          const face = this.state.face
          let index = this.state.face.indexOf(src);
          let tempArr = this.state.face.filter(e=>{return e!==src});

          let res = Math.floor(Math.random()*2);
          if(res===2)res=1;
          // return  this.state.face[res]; 
          //   this.setState({src:this.state.face[res]})
            this.setState({src:tempArr[res]});
          
          counter--;
          if(counter==0){
            console.log("timesup");
            clearInterval(a);
    
            switch(this.state.src){
              case img1 :
                this.props.mode('meta');
                break;
              case img2 :
                this.props.mode('syn');
                 break;
              case img3 :
                this.props.mode('verb');
                 break;
              default:
                console.log('default');
            }
          }
        },500);
          
      }

      keyUp = (event) =>{
        console.log({keyup:"in key up"});
        if (event.keyCode === 13) {
          event.preventDefault();
          this.img.click();
          this.button.click();
        }
      }
      
    render()
     {                
        return (
            <>
                 
                            <form onSubmit={this.props.submit}>                                   
                                {/* <h2 className="form__label">Enter the Word</h2>     */}
                                <div className="form-components">
                                <div className="wrapper">                                    
                                    <div className="search">
                                        <img src={Search_Icon} alt="" className="search__icon"/>
                                        <input type="text" onKeyUp={this.keyUp} name="word" id="word" placeholder="search word here" className="search__bar"/>
                                        {/* <Dice/>                               */}
                                        <button ref = {button=>{this.button=button}} className="search__cta" type='submit'>
                                            <img ref = {img=>{this.img=img}}  className="search__cta--img" onClick={this.swapping} src={this.state.src}/>
                                         </button>
                                    </div>
                                </div>
                                </div>    
                            </form>    
                                                                                                               
             </>
        )
    }
}
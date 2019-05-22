import React from 'react';
import img1 from '../assets/icon/meta.png';
import img2 from '../assets/icon/yoshi.png';
import img3 from '../assets/icon/egg.png';

class Dice extends React.Component{ 

  state = {
    face:[img1,img2,img3],
    src:img1,
    counter:5,
    mode:''
  }

  swap = (a) => {
    const counter = 0;
    let res = Math.floor(Math.random()*3);
    console.log(res);
    if(res===3)res=2;
    // return  this.state.face[res]; 
    this.setState({src:this.state.face[res]})
    console.log(a);
    
  }

  swapping= () =>{
    let i = 10;
    // const a = setInterval(this.swap, 2000);
    const a = setInterval(()=>{
      const counter = 0;
      let res = Math.floor(Math.random()*3);
      if(res===3)res=2;
      // return  this.state.face[res]; 
      this.setState({src:this.state.face[res]})
      i--;
      if(i==0){
        console.log("timesup");
        clearInterval(a);
        // console.log(this.state.src===img1);

        // switch(this.state.src){
        //   case img1 :
        //     console.log('aqua');
        //     this.props.mode('aqua');
        //     break;
        //   case img2 :
        //     console.log('guu');
        //     this.props.mode('guu');
        //      break;
        //   case img3 :
        //     console.log('nanachi');
        //     this.props.mode('nanachi');
        //      break;
        //   default:
        //     console.log('default');
        // }
      }
    },1000);
    
  }

  componentDidMount(){
    console.log("here");
    // this.swapping();
  }
  
  render(){
    return(
      // this.state.face.map(img=>
      // (<img src={img}/>)
      // )
      // <img src={this.swap()}/>
      <button className="search__cta" type='submit'>
          <img className="search__cta--img" onClick={this.swapping} src={this.state.src}/>
      </button>
    )
  }
  componentDidUpdate(){
    console.log("in update");
  }
}


export default Dice;
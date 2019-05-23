import React from 'react';
import meta_s from '../assets/gifs/meta_s.png';
import meta from '../assets/gifs/meta.gif';
import egg_s from '../assets/gifs/egg_s.png';
import egg from '../assets/gifs/egg.gif';
import raptor_s from '../assets/gifs/raptor_s.png';
import raptor from '../assets/gifs/raptor.gif';
import yoshi_s from '../assets/gifs/yoshi_s.png';
import yoshi from '../assets/gifs/yoshi.gif';


class Button extends React.Component{ 
  state = {
    src:raptor
  }

  componentDidMount(){
    console.log("Mount Button");
  }

  swapSrc = () => {
    const mode = this.props.mode;
    let gif;
    let png;



    if(mode === 'main'){
      console.log('in main');
      this.setState({src:raptor});
      gif = raptor;
      png = raptor_s;
    }
    if(mode === 'syn'){
      console.log('in syn');
      this.setState({src:yoshi});
      gif = yoshi;
      png = yoshi_s;
    }
    if(mode === 'meta'){
      console.log('in meta');
      this.setState({src:meta});
      gif = meta;
      png = meta_s;
    }
    if(mode === 'verb'){
      console.log('in verb');
      this.setState({src:egg});
      gif = egg;
      png = egg_s;
    }

    if(this.state.src===gif){
      this.setState({src:png});
      console.log(this.props);
      this.props.handler(false);
    }

    if(this.state.src===png){
      this.setState({src:gif});
      console.log(this.props);
      this.props.handler(true);
    }
  }
  render(){
    return(
      <img className="btn" ref={img=>this.img=img} onClick ={this.swapSrc} src={this.state.src}/>
      )
  }
  componentDidUpdate(){
    const mode = this.props.mode;
    if(mode === 'main' && this.state.src!==raptor&&this.state.src!==raptor_s){
      this.setState({src:raptor});
    }
    if(mode === 'syn' && this.state.src!==yoshi&&this.state.src!==yoshi_s){
      this.setState({src:yoshi});
    }
    if(mode === 'meta' && this.state.src!==meta&&this.state.src!==meta_s){
      this.setState({src:meta});
    }
    if(mode === 'verb' && this.state.src!==egg&&this.state.src!==egg_s){
      this.setState({src:egg});
    }
    
  }
}
export default Button;
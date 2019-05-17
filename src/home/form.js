import React, { Component } from 'react';

export default class MainForm extends Component {        
    render()
     {                
        return (
            <>
                <div className="form" >    
                            <form onSubmit={this.props.submit}>                                   
                                <label htmlFor="search" className="comment-form__form--label">Enter the Word</label>    
                                <div className="form-components">
                                    <input type="text" name="word" id="word" placeholder="search word here" />
                                    <button type="submit">Submit</button>                                
                                </div>    
                            </form>    
                </div>                                                                                                     
             </>
        )
    }
}
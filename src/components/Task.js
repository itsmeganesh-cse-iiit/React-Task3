import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             like:0,
             dislike:0,
             likeFlag:false,
             dislikeFlag:false,

        }
    }  
    likeHandler=()=>{
        this.setState({
            likeFlag:!this.state.likeFlag
        },()=>{
            if(this.state.likeFlag){
                this.setState({
                    like:this.state.like+1
                })
            }
            // else{
            //     this.setState({
            //         like:this.state.like-1
            //     })
            // }
        })
    }

    dislikeHandler=()=>{
       this.setState({
           dislikeFlag:!this.state.dislikeFlag
       },()=>{
            if(this.state.dislikeFlag){
                this.setState({
                    dislike:this.state.dislike+1
                })
            }
            // else{
            //     this.setState({
            //         dislike:this.state.dislike-1
            //     })
            // }

       });
       

    }
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <button onClick={this.likeHandler}>Like</button><button>{this.state.like}</button><br/><br/>
                <button onClick={this.dislikeHandler}>Dislike</button><button>{this.state.dislike}</button>
            </div>
        )
    }
}

export default Task

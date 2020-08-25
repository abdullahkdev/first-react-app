import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Counter extends Component {
state ={
    count :0,
    imageURL:'https://picsum.photos/200',
    tags:['tag1','tag2','tG3']

}
style = {
    fontSize:50,
    fontWeight: 'bold'
}

// constructor(){
//     super();
//  this.handleIncrement =   this.handleIncrement.bind(this);
// }
renderConditionalTags(){
    if (this.state.tags.length === 0) return <p>No tags avail</p>;
    else return (            <ul>
        {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
    </ul>)
}

handleIncrement =() => 
{ 
    this.setState({ count: this.state.count+1});
    console.log(' handle increment called', this.state)

}

    render() { 

        return(
             
      
            <React.Fragment>
            <h1>Welcome to Abdullah's first REACT app</h1> 
            <img src={this.state.imageURL} alt="no image" />
        <span   className={this.getbadgeClasses()}>{this.formatCounter()}</span>
            <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm"> Increment</button>
            {this.state.tags.length > 0 && 'you have tags more than 0 tags'}
{this.renderConditionalTags()}

            </React.Fragment>
            
            );
    }

    getbadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count == 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCounter(){
        const {count } = this.state;
       return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;
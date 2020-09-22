import React, {Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title:'',
      desc:''
    }
  }

  handleEvent = () => {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json',
         },

        body: JSON.stringify({ title: this.state.title,description:this.state.desc })
    };

    fetch(`http://localhost:8080/pins/create`, requestOptions)
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(error => {
           console.error('There was an error!', error);
       });
  }

  render() {
    return (   
       <div>
          <h1>Création de Pin</h1>
          <label>Title : </label>
          <input type="text" onChange = {input => this.setState({title:input.target.value})}/>
          <br/>
          <label>Description: </label> <br/>
          <textarea  onChange = {input => this.setState({desc:input.target.value})}></textarea>
          <br/>
          <br/>
          <button onClick={() =>  this.handleEvent()}>Save</button>
       </div>
    );
  }
}

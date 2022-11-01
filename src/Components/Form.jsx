import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super();
        this.displayData = [];
        
        this.state = {
            Name: "",
            Deportment: "",
            Rating: "",
            showData: this.displayData,
        };

        this.description = this.description.bind(this);
        this.setName = this.setName.bind(this);
        this.setDeportment = this.setDeportment.bind(this)
        this.setRating = this.setRating.bind(this);
    }


description() {
    this.displayData.push(
        <div className="data">
            Name: {this.state.name} | Deportment: {this.state.Deportment} | Rating: {" "}  {this.state.Rating}
        </div>
    );

    this.setState({
        Name: "",
        Deportment: "",
        Rating: "",
        showData: this.displayData,
    });

}

setName(e) {
    let val = e.target.value;
    this.setState({
        name: val,
    });
}
setDeportment(e) {
    let val = e.target.value;
    this.setState({
        Deportment: val,
    });
}

setRating(e) {
    let val = e.target.value;
    this.setState({
        Rating: val,
    });
}

onsubmit = (e) =>{
    e.preventDefault();
};

render() {
    return (
        <div className="container">
            <h1 className='headingg'>EMPOLYEE FEEDBACK FORM</h1>
            <form className='note' onSubmit={this.onSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.Name} onChange={this.setName} />
            </label>

            <label>
                Deportment:
                <input type="text" value={this.state.Deportment} onChange={this.setDeportment} />
            </label>

            <label>
                Rating:
                <input type="text" value={this.state.Rating} onChange={this.setRating} />
            </label> <br />
            <button onClick={this.description}>submit</button>
            </form>

            <div id="formData">{this.displayData}</div>

        </div>
    );
}
}


export default Form;
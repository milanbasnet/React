import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(e){
         const name= e.target;
    }
    render() {
        return (
            <div>
            <div>
                <h1>FORM</h1>
            </div>
            <div className='box'>
                <div>
                <label>
                Name:
            <input type='text' name="fullName" onChange={this.handleChange} value={this.fullName} placeholder="Name" />
            </label>
            </div>
            <div>
            <label> <br />
                Address:
            <input type='text' name="address" placeholder="address" />
            </label>
            </div>
            <div>
            <label> <br />
                Email:
            <input type= "email" name="email" placeholder="email" required />
            </label>
            </div>
            <br />
            <div className="gender">
                Gender: <br />
            <label>
                <input type="radio" name="gender" value="male" />
                Male
            </label> <br />
            <label>
                <input type="radio" name="gender" value="female" />
                Female
            </label>
            </div>
            <div className="interests">
                <h3>Select Your Interest</h3>
                <select>
                    <option value="">--Please select your interest--</option>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Travelling">Travelling</option>
                    <option value="Politics">Politics</option>
                </select>
            </div>
            <div className="favplayers">
                <h3>Mark your favorite players</h3>
                <input type="checkbox" name="Lionel Messi"/>
                <span>Lionel Messi</span> <br />
                <input type="checkbox" name="Smith"/>
                <span>Steven Smith</span> <br />
                <input type="checkbox" name="Ronaldo"/>
                <span>Cristiano Ronaldo</span> <br />
                <input type="checkbox" name="Neymar"/>
                <span>Neymar Junior</span> <br />
                <input type="checkbox" name="ABD"/>
                <span>AB de Villiers</span> <br />
            </div> <br />
            <div className="buttonwala">
                <button type="submit">Submit</button>
            </div>
            </div>
            <div className="inputs">
                <h2>Entered Information</h2>
                Entered Name: {this.fullName}

            </div>
            </div>
        )
    }
}

export default Form

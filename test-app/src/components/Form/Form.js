import React from 'react'
import './Form.scss'
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      results: []
    }
  }
  handleChange = event => {
    const person = event.target.value;
    this.setState({person});
  }
  submitHandler = event => {
    if (event.key === 'Enter') {
      if (this.state.person === '') {
        console.log('Введите имя')
      } else {
      fetch(`https://swapi.dev/api/people/?search=${this.state.person}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          results: result.results
        });
      } 
      )
    }}
  }
  render() {
    const { results} = this.state;

      return (
        <div className="form-wrapper">
        <h1>Search for characters from Star Wars</h1>
        <div>
        <input 
          type="text"
          name="person"
          className="form-input"
          placeholder="Enter your characters name"
          value={this.state.person}
          onChange={this.handleChange}
          onKeyPress={this.submitHandler}
        />
        </div>
        <div className="form-result">
          <ul>
          {results.map(result => (
            <li key={result.name} mass={result.mass}>
              <Link 
              to={{pathname:`/${result.name}`,
            state: {
              name: result.name,
              birth_year: result.birth_year,
              gender: result.gender,
              homeworld: result.homeworld,
              height: result.height,
              mass: result.mass,
              hair_color: result.hair_color,
              skin_color: result.skin_color,
              eye_color: result.eye_color,
              }
          }}
                >{result.name}</Link>
            </li>
          ))} 
        </ul>
         </div>
        </div> 
      )
    }
  }

export default Form

import React, { Component } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import './Contact.scss'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    msg: ''
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  handleSubmit = async () => {
    const { name, email, msg: message } = this.state
    let res = await axios.post('/send', { name, email, message })
    console.log(res)
    this.setState({
      name: '',
      email: '',
      msg: ''
    })
    Swal.fire(res.data.message)
  }


  render() {
    const { name, email, msg } = this.state
    return (
      <div className="contact-form">
        <h1>
          Contact Me
        </h1>
        <p>Contact me at kennycrump@gmail.com</p>
      <p>-OR-</p>
        <p>Use this contact form:</p>
        <input onChange={e => this.handleChange('name', e.target.value)}
              value={name}
              placeholder='NAME' type="text" />
        <input onChange={e => this.handleChange('email', e.target.value)}
              value={email}
              placeholder='EMAIL' type="text" />
        <textarea className='contact-message' onChange={e => this.handleChange('msg', e.target.value)}
              value={msg}
              placeholder='MESSAGE' name="" id="" cols="30" rows="10"></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
        <p>-OR-</p>
        <p>Find me on LinkedIn and GitHub</p>
        <div className='icons' >
        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/kenny-crump/"><span className='icon-span'><i class="fab fa-linkedin"></i></span></a>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/KennyCrump"><span className='icon-span'><i class="fab fa-github-square"></i></span></a>
        </div>
      </div>
      // <section id="contact">
      //   <div className='contact-header'>
      //     <h1>Contact</h1>
      //     <p>
      //       See my <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/kennycrump/">LinkedIn</a> for my email address,
      //       <br/>
      //       or feel free to contact me for any work or suggestions below.
      //     </p>
      //   </div>

      //   <div className='contact-input'>
      //     <div className='contact-top-inputs'>
      //       <input className='left' onChange={e => this.handleChange('name', e.target.value)}
      //         value={name}
      //         placeholder='NAME' type="text" />
      //       <input className='right' onChange={e => this.handleChange('email', e.target.value)}
      //         value={email}
      //         placeholder='EMAIL' type="text" />
      //       <textarea className='contact-message' onChange={e => this.handleChange('msg', e.target.value)}
      //         value={msg}
      //         placeholder='MESSAGE' name="" id="" cols="30" rows="10"></textarea>
      //         <br/>
      //       <button onClick={this.handleSubmit}>Submit</button>
      //     </div>
      //   </div>


      // </section>
    );
  }
}
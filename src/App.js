import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <div>
            <h1>
              Kelly Ho
            </h1>
            <h2>
              Hi, I'm Kelly
            </h2>
            <div>
              <a href="https://www.linkedin.com/in/kellykho/">LinkedIn</a>
              <a href="https://github.com/cycduck">git</a>
            </div>
          </div>

          <div className="app__divider" />

          <div>
            <h2>projects</h2>
            <ul>
              <li><a href="https://github.com/cycduck/ttc">ttc</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

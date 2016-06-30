import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import $ from 'jquery'
import App from './components/canvas/app.jsx'
import './styles/app.less'

$(function(){
  render((
    <Router>
      <Route path="/" component={App} />
    </Router>
  ), document.getElementById('app-container'));

})

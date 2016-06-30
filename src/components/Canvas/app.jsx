import Canvas from './canvas.jsx'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class App extends Component {
  constructor(props) {
          super(props);

          //store our zoom level in state
          this.state = {
              zoomLevel:1.0
          };

          //pre bind our zoom handlers
          this.onZoomIn = this.onZoomIn.bind(this);
          this.onZoomOut = this.onZoomOut.bind(this);
      }
      /**
       * Event handler for clicking zoom in. Increments the zoom level
       **/
      onZoomIn() {
          let zoomLevel = this.state.zoomLevel += .1;
          this.setState({zoomLevel});
      }
      /**
       * Event handler for clicking zoom out. Decrements the zoom level
       **/
      onZoomOut() {
          let zoomLevel = this.state.zoomLevel -= .1;

          if (zoomLevel >= 0) {
              this.setState({zoomLevel});
          }

      }

      render() {
           return (
               <div className="worm">
                  <div className="buttons">
                    <Button bsStyle="primary" className="btn-lg" onClick={this.onZoomIn}>Zoom In</Button>
                    <Button bsStyle="primary" className="btn-lg" onClick={this.onZoomOut}>Zoom Out</Button>
                  </div>
                  <Canvas zoomLevel={this.state.zoomLevel}/>
               </div>
           );
      }
}

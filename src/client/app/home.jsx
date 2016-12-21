import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="hero">
          <div className="column-1000">
            <div id="greeter">
              <h1>i'm aaron</h1>
              <h3>i build robots and websites</h3>
            </div>
            <div className="picture-frame outer">
              <div className="picture-frame inner">
                <img className="pricture-frame picture" src="me.jpg"  height={280} width={280}/>
              </div>
            </div>
          </div>
        </div>
        <div id="about-me" className="column-1000">
          <p className="about-text">
            Hey! I'm a 19 year old Computer Science <br/> major at the
            University of Texas at Austin and incoming summer intern at Audible,
            an Amazon Company. Currently interested in web development,
            operating systems, robotics, and machine learning.
            <br/><br/>
            Need to contact me? Email me at aaron [at] cs.utexas.edu, or just
            catch me on social media.
          </p>
          <div className="social-media-panel">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-github"></i>
          </div>
        </div>
      </div>
    )
  }
}

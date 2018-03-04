import React from 'react';

import TagItem from '../../common/TagItem/index';
import jPhoto from 'Assets/images/j-photo.jpg';

const About = () => {
  return (
    <section id="about" className="texts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="heading">{ '<About me />' }</h2>
            <p className="lead">Who am I ?</p>
            <p>
              My name is Jeyhun Ashurbayov, I am 24 years old, I live and work in Baku city, Azerbaijan.
              I am Full-Stack Web Developer with 5 years of experience and during my career
              I got involved in so many web application projects as Front-end and Back-end developer.
            </p>
            <p>
              For coding, I have a good expertise on Javascript, Node.js, PHP, HTML5, CSS3. In addition,
              I have also great experiences in these frameworks/libraries such as
              Yii2, jQuery, Angular, React, Bootstrap, MaterializeCSS also tools like
              SASS, Gulp, Grunt, Webpack, Mocha, Jest, Enzyme...</p>
            <TagItem title="HTML5" />
            <TagItem title="CSS3" />
            <TagItem title="Javascript" />
            <TagItem title="Node.Js" />
            <TagItem title="PHP" />
            <TagItem title="Yii2" />
            <TagItem title="React" />
            <TagItem title="Angular" />
            <TagItem title="Bootstrap" />
            <TagItem title="MaterializeCSS" />
            <TagItem title="SASS" />
            <TagItem title="Gulp" />
            <TagItem title="Grunt" />
            <TagItem title="Webpack" />
            <TagItem title="Mocha" />
            <TagItem title="Jest" />
            <TagItem title="Enzyme" />
            <TagItem title="CI/CD" />
            <TagItem title="GitHub" />
          </div>
          <div className="col-md-5 col-md-offset-1">
            <p><img src={jPhoto} alt="" className="img-responsive img-circle" /></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import './Resume.scss';
import resumeImg from 'Assets/images/resume-img.png';
import resumePdf from 'Assets/files/resume.pdf';
import resumeDocx from 'Assets/files/resume.docx';

const Resume = () => {

  return (
    <section className="portfolio gallery">
      <div className="container clearfix">
        <div>
          <h2 className="heading">{ '<Hire me />' }</h2>
          <Row className="show-grid">
            <Col md={4} mdOffset={2}>
              {/*<a href={resumeImg} title="" data-toggle="lightbox" data-gallery="portfolio" data-title="Portfolio image 1" data-footer="Some footer information">*/}
              <img src={resumeImg} alt="" className="img-responsive"/>
              {/*</a>*/}
            </Col>
            <Col md={4}>
              <h5>Get My Resume</h5>
              <Button
                bsSize="large"
                bsStyle="primary"
                className="portfolio__button"
                href={resumePdf}
              >Download .pdf</Button>
              <Button
                bsSize="large"
                bsStyle="primary"
                className="portfolio__button"
                href={resumeDocx}
              >Download .docx</Button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Resume;
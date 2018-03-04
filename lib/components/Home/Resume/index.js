import React from 'react';

import { Button } from 'react-bootstrap';

const Resume = () => {
    return (
        <section id="portfolio" className="gallery">
            <div className="container clearfix">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <h2 className="heading">{ '<Hire me />' }</h2>
                                <div className="col-md-8">
                                    <p>

                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <Button bsStyle="primary">Resume</Button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="box">
                                    <a href="img/portfolio-1.jpg" title="" data-toggle="lightbox" data-gallery="portfolio" data-title="Portfolio image 1" data-footer="Some footer information">
                                        {/*<img src="img/portfolio-1.jpg" alt="" className="img-responsive">*/}
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <a href="img/portfolio-1.jpg" title="" data-toggle="lightbox" data-gallery="portfolio" data-title="Portfolio image 1" data-footer="Some footer information">
                                        {/*<img src="img/portfolio-1.jpg" alt="" className="img-responsive">*/}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Resume;
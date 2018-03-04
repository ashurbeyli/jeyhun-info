import React from 'react';

const Services = () => {
    return (
        <section id="skills" style={{backgroundColor: '#eee'}}>
            <div className="container">
                <div className="row services">
                    <div className="col-md-12">
                        <h2 className="heading">{ '<Project Life-Cycle />' }</h2>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-desktop"></i></div>
                                    <h4>Application</h4>
                                    <p>
                                        User-friendly, well optimized, responsive web applications will be created
                                        by using cutting-edge Development tools for both of front-end and back-end side.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-check-circle"></i></div>
                                    <h4>Testability</h4>
                                    <p>
                                        Web Applications deployment process passes through high-level Unit testing that
                                        customers can be sure that they will be notified about any kind of bugs or
                                        errors.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-rocket"></i></div>
                                    <h4>Deployment</h4>
                                    <p>
                                        Automated Continues Integration / Delivery / Deployment
                                        processes will be implemented in the project that will help customers
                                        to rely on system will no have bugs before release.
                                        You can read more about CI/CD in&nbsp;
                                        <a
                                            href="https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd"
                                            target="_blacnk"
                                            style={{color: 'blue'}}
                                        >here</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Services;
import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#111'}} className="section-inverse">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-6">
                        <p>&copy;2018 Jeyhun Ashurbayov</p>
                    </div>
                    <div className="col-md-6">
                        {/*<p className="credit">Template by <a href="https://bootstrapious.com/e-commerce-templates">Bootstrapious</a></p>*/}
                        {/*<!-- Please do not remove the backlink to us unless you support the development at https://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :) -->*/}
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;
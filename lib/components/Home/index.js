import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import InputPreview from '../components/inputPreview';
import { connect } from 'react-redux';
import { setMessage } from '../../actions/message';

import Intro from './Intro/index';
import Menu from '../common/Menu/';
import About from './About/';
import Services from './Services/index';
import Resume from './Resume/index';
import Footer from '../common/Footer/';

export class Home extends Component {
  _onChange = (value) => {
    this.props.setMessage(value);
  };

  render () {
    // const { message } = this.props;
    return (
      <div className="fullHeight">
        <Intro />
        {/*<Menu />*/}
        {/*<About />*/}
        {/*<Services />*/}
        {/*<Resume />*/}
        {/*<Footer />*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.message };
}

export default connect(mapStateToProps, { setMessage })(Home);
import React from 'react';
import { withRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

class RouteDataLoader extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      matchRoutes(this.props.routes, nextProps.location.pathname).forEach(({route, match}) => {
        this.props.dispatch(route.loadData(match));
      });
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(RouteDataLoader);
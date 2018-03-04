import React from 'react';

// import '../styles/components/input-preview.scss';

export default class InputPreview extends React.Component {
  render () {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}
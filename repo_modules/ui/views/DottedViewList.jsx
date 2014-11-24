var React = require('react');
var ViewList = require('./ViewList');

var DottedViewList = React.createClass({
  render() {
    var width = this.props.width || window.innerWidth;
    var dottedViewProps = Object.assign({
      titleBarProps: {
        height: 48,
        styles: {
          mid: {
            position: 'relative',
            top: -4
          }
        }
      },
      width: width,
      transform: 'VIEW_SIDE_BY_SIDE',
      touchStartBounds: {
        x: {
          from: 10, // exclude left edge
          to: width
        }
      }
    }, this.props);

    return <ViewList {...dottedViewProps} />;
  }
});

module.exports = DottedViewList;
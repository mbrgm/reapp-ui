var React = require('react');
var Component = require('../component');
var Icon = require('./Icon');
var Tappable = require('../mixins/Tappable');

module.exports = Component({
  name: 'BarItem',

  mixins: [
    Tappable
  ],

  propTypes: {
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    iconProps: React.PropTypes.object,
    children: React.PropTypes.string,
    display: React.PropTypes.oneOf([
      'text', 'icon', 'icon-text', 'icon-text-right'
    ]),
    active: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      display: 'icon-text'
    };
  },

  makeSection(name, content) {
    return content && (
      <span {...this.componentProps(`${this.props.display}__${name}`)}>
        {content}
      </span>
    );
  },

  render() {
    var {
      icon,
      children,
      display,
      iconProps,
      active,
      ...props } = this.props;

    this.addStyles(display);

    if (active)
      this.addStyles('active');

    if (typeof icon === 'string')
      icon = (
        <Icon
          color={this.getConstant(active ? 'barColorActive' : 'barColor')}
          size={(display === 'icon-text-right') ? 24 : 32}
          file={icon}
          styles={this.getStyles('icon')}
          svgProps={{style: { margin: 'auto' }}}
          {...iconProps} />
      );

    return (
      <li {...this.componentProps()} {...this.tappableProps()} {...props}>
        {this.makeSection('icon', icon)}
        {this.makeSection('text', children)}
      </li>
    );
  }
});
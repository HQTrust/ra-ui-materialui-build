'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Hidden = require('@material-ui/core/Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _defaultTheme = require('../defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    var _content;

    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            position: 'relative'
        },
        appFrame: {
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'auto'
        },
        contentWithSidebar: {
            display: 'flex',
            flexGrow: 1
        },
        content: (_content = {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 2,
            padding: theme.spacing.unit * 3,
            minWidth: 0
        }, (0, _defineProperty3.default)(_content, theme.breakpoints.up('xs'), {
            marginTop: '4em',
            paddingLeft: 5
        }), (0, _defineProperty3.default)(_content, theme.breakpoints.down('sm'), {
            padding: 0
        }), (0, _defineProperty3.default)(_content, theme.breakpoints.down('xs'), {
            marginTop: '3em'
        }), _content)
    };
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var staticContext = _ref.staticContext,
        props = (0, _objectWithoutProperties3.default)(_ref, ['staticContext']);
    return props;
};

var Layout = function Layout(_ref2) {
    var children = _ref2.children,
        classes = _ref2.classes,
        className = _ref2.className,
        customRoutes = _ref2.customRoutes,
        dashboard = _ref2.dashboard,
        logout = _ref2.logout,
        menu = _ref2.menu,
        open = _ref2.open,
        title = _ref2.title,
        props = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'classes', 'className', 'customRoutes', 'dashboard', 'logout', 'menu', 'open', 'title']);
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
            className: (0, _classnames2.default)('layout', classes.root, className)
        }, sanitizeRestProps(props)),
        _react2.default.createElement(
            'div',
            { className: classes.appFrame },
            _react2.default.createElement(
                _Hidden2.default,
                { xsDown: true },
                _react2.default.createElement(_AppBar2.default, { title: title, open: open, logout: logout })
            ),
            _react2.default.createElement(
                'main',
                { className: classes.contentWithSidebar },
                _react2.default.createElement(
                    _Sidebar2.default,
                    null,
                    (0, _react.createElement)(menu || _Menu2.default, {
                        logout: logout,
                        hasDashboard: !!dashboard
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: classes.content },
                    children
                )
            ),
            _react2.default.createElement(_Notification2.default, null)
        )
    );
};

var componentPropType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);

Layout.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    customRoutes: _propTypes2.default.array,
    dashboard: componentPropType,
    logout: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.string]),
    menu: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
    open: _propTypes2.default.bool,
    title: _propTypes2.default.node.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        open: state.admin.ui.sidebarOpen
    };
};

var EnhancedLayout = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, {} // Avoid connect passing dispatch in props
), (0, _styles.withStyles)(styles))(Layout);

var LayoutWithTheme = function (_Component) {
    (0, _inherits3.default)(LayoutWithTheme, _Component);

    function LayoutWithTheme(props) {
        (0, _classCallCheck3.default)(this, LayoutWithTheme);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LayoutWithTheme.__proto__ || Object.getPrototypeOf(LayoutWithTheme)).call(this, props));

        _this.theme = (0, _styles.createMuiTheme)(props.theme);
        return _this;
    }

    (0, _createClass3.default)(LayoutWithTheme, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.theme !== this.props.theme) {
                this.theme = (0, _styles.createMuiTheme)(nextProps.theme);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                rest = (0, _objectWithoutProperties3.default)(_props, ['theme']);

            return _react2.default.createElement(
                _styles.MuiThemeProvider,
                { theme: this.theme },
                _react2.default.createElement(EnhancedLayout, rest)
            );
        }
    }]);
    return LayoutWithTheme;
}(_react.Component);

LayoutWithTheme.propTypes = {
    theme: _propTypes2.default.object
};

LayoutWithTheme.defaultProps = {
    theme: _defaultTheme2.default
};

exports.default = LayoutWithTheme;
module.exports = exports['default'];
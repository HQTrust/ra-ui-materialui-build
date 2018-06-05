'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _styles = require('@material-ui/core/styles');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Responsive = require('../layout/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _raCore = require('ra-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        floating: {
            color: theme.palette.getContrastText(theme.palette.primary.main),
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 60,
            left: 'auto',
            position: 'fixed',
            zIndex: 1000
        },
        floatingLink: {
            color: 'inherit'
        },
        desktopLink: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        iconPaddingStyle: {}
    };
};

var CreateButton = function CreateButton(_ref) {
    var ButtonClass = _ref.ButtonClass,
        _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '' : _ref$basePath,
        className = _ref.className,
        _ref$classes = _ref.classes,
        classes = _ref$classes === undefined ? {} : _ref$classes,
        icon = _ref.icon,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'ra.action.create' : _ref$label,
        translate = _ref.translate,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['ButtonClass', 'basePath', 'className', 'classes', 'icon', 'label', 'translate']);
    return _react2.default.createElement(_Responsive2.default, {
        small: _react2.default.createElement(
            ButtonClass,
            (0, _extends3.default)({
                component: _Link2.default,
                variant: 'fab',
                color: 'primary',
                className: (0, _classnames2.default)(classes.floating, className),
                to: basePath + '/create'
            }, rest),
            _react2.default.cloneElement(icon)
        ),
        medium: _react2.default.createElement(
            ButtonClass,
            (0, _extends3.default)({
                component: _Link2.default,
                color: 'primary',
                to: basePath + '/create',
                className: (0, _classnames2.default)(classes.desktopLink, className)
            }, rest),
            _react2.default.cloneElement(icon, {
                className: classes.iconPaddingStyle
            }),
            label && translate(label)
        )
    });
};

CreateButton.propTypes = {
    ButtonClass: _propTypes2.default.object.isRequired,
    basePath: _propTypes2.default.string,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    icon: _propTypes2.default.element.isRequired,
    label: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired
};

CreateButton.defaultProps = {
    ButtonClass: _Button2.default,
    icon: _react2.default.createElement(_Add2.default, null)
};

var enhance = (0, _compose2.default)(_raCore.translate, (0, _onlyUpdateForKeys2.default)(['basePath', 'label']), (0, _styles.withStyles)(styles));

exports.default = enhance(CreateButton);
module.exports = exports['default'];
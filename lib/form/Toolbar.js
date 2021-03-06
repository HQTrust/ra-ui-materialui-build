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

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../button');

var _Responsive = require('../layout/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    mobileToolbar: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        zIndex: 2
    }
};

var valueOrDefault = function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
};

var Toolbar = function Toolbar(_ref) {
    var children = _ref.children,
        classes = _ref.classes,
        className = _ref.className,
        handleSubmitWithRedirect = _ref.handleSubmitWithRedirect,
        invalid = _ref.invalid,
        pristine = _ref.pristine,
        submitOnEnter = _ref.submitOnEnter,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'classes', 'className', 'handleSubmitWithRedirect', 'invalid', 'pristine', 'submitOnEnter']);
    return _react2.default.createElement(_Responsive2.default, {
        xsmall: _react2.default.createElement(
            _Toolbar2.default,
            (0, _extends3.default)({
                className: (0, _classnames2.default)(classes.mobileToolbar, className),
                disableGutters: true
            }, rest),
            _react.Children.count(children) === 0 ? _react2.default.createElement(_button.SaveButton, {
                handleSubmitWithRedirect: handleSubmitWithRedirect,
                invalid: invalid,
                variant: 'flat',
                submitOnEnter: submitOnEnter
            }) : _react.Children.map(children, function (button) {
                return button ? _react2.default.cloneElement(button, {
                    invalid: invalid,
                    pristine: pristine,
                    handleSubmitWithRedirect: handleSubmitWithRedirect,
                    variant: 'flat',
                    submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter)
                }) : null;
            })
        ),
        medium: _react2.default.createElement(
            _Toolbar2.default,
            (0, _extends3.default)({ className: className }, rest),
            _react.Children.count(children) === 0 ? _react2.default.createElement(_button.SaveButton, {
                handleSubmitWithRedirect: handleSubmitWithRedirect,
                invalid: invalid,
                submitOnEnter: submitOnEnter
            }) : _react.Children.map(children, function (button) {
                return button ? _react2.default.cloneElement(button, {
                    handleSubmitWithRedirect: handleSubmitWithRedirect,
                    invalid: invalid,
                    pristine: pristine,
                    submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter)
                }) : null;
            })
        )
    });
};

Toolbar.propTypes = {
    children: _propTypes2.default.node,
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    handleSubmitWithRedirect: _propTypes2.default.func,
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitOnEnter: _propTypes2.default.bool
};

Toolbar.defaultProps = {
    submitOnEnter: true
};

exports.default = (0, _styles.withStyles)(styles)(Toolbar);
module.exports = exports['default'];
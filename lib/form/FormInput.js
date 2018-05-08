'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormInput = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Labeled = require('../input/Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var basePath = _ref.basePath,
        record = _ref.record,
        resoure = _ref.resoure,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['basePath', 'record', 'resoure']);
    return rest;
};

var FormInput = function FormInput(_ref2) {
    var input = _ref2.input,
        rest = (0, _objectWithoutProperties3.default)(_ref2, ['input']);
    return input ? _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)('ra-input', 'ra-input-' + input.props.source, input.props.formClassName)
        },
        input.props.addLabel ? _react2.default.createElement(
            _Labeled2.default,
            (0, _extends3.default)({}, input.props, sanitizeRestProps(rest)),
            _react2.default.cloneElement(input, (0, _extends3.default)({
                className: input.props.className
            }, rest))
        ) : _react2.default.cloneElement(input, (0, _extends3.default)({
            className: input.props.className
        }, rest))
    ) : null;
};

exports.FormInput = FormInput;
FormInput.propTypes = {
    className: _propTypes2.default.string,
    input: _propTypes2.default.object
};

exports.default = FormInput;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooleanField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Clear = require('@material-ui/icons/Clear');

var _Clear2 = _interopRequireDefault(_Clear);

var _Done = require('@material-ui/icons/Done');

var _Done2 = _interopRequireDefault(_Done);

var _sanitizeRestProps = require('./sanitizeRestProps');

var _sanitizeRestProps2 = _interopRequireDefault(_sanitizeRestProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleanField = function BooleanField(_ref) {
    var className = _ref.className,
        source = _ref.source,
        record = _ref.record,
        FalseIcon = _ref.FalseIcon,
        TrueIcon = _ref.TrueIcon,
        falseIconProps = _ref.falseIconProps,
        trueIconProps = _ref.trueIconProps,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['className', 'source', 'record', 'FalseIcon', 'TrueIcon', 'falseIconProps', 'trueIconProps']);

    if ((0, _get2.default)(record, source) === false) {
        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ className: className }, (0, _sanitizeRestProps2.default)(rest)),
            _react2.default.createElement(FalseIconClass, falseIconProps)
        );
    }

    if ((0, _get2.default)(record, source) === true) {
        return _react2.default.createElement(
            'span',
            (0, _extends3.default)({ className: className }, (0, _sanitizeRestProps2.default)(rest)),
            _react2.default.createElement(TrueIconClass, trueIconProps)
        );
    }

    return _react2.default.createElement('span', (0, _extends3.default)({ className: className }, (0, _sanitizeRestProps2.default)(rest)));
};

exports.BooleanField = BooleanField;
BooleanField.propTypes = {
    FalseIconClass: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired,
    TrueIconClass: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired,
    addLabel: _propTypes2.default.bool,
    basePath: _propTypes2.default.string,
    cellClassName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    falseIconProps: _propTypes2.default.object,
    headerClassName: _propTypes2.default.string,
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    sortBy: _propTypes2.default.string,
    source: _propTypes2.default.string.isRequired,
    trueIconProps: _propTypes2.default.object
};

var PureBooleanField = (0, _pure2.default)(BooleanField);

PureBooleanField.defaultProps = {
    FalseIconClass: _Clear2.default,
    TrueIconClass: _Done2.default,
    addLabel: true
};

exports.default = PureBooleanField;
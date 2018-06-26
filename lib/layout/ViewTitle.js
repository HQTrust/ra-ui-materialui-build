'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewTitle = function ViewTitle(_ref) {
    var className = _ref.className,
        title = _ref.title;
    return _react2.default.createElement(
        'div',
        { className: className },
        title
    );
};

ViewTitle.propTypes = {
    className: _propTypes2.default.string,
    title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired
};

exports.default = ViewTitle;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumberField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _sanitizeRestProps = require('./sanitizeRestProps');

var _sanitizeRestProps2 = _interopRequireDefault(_sanitizeRestProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasNumberFormat = !!((typeof Intl === 'undefined' ? 'undefined' : (0, _typeof3.default)(Intl)) === 'object' && Intl && typeof Intl.NumberFormat === 'function');

var styles = {
    input: { textAlign: 'right' }
};

/**
 * Display a numeric value as a locale string.
 *
 * Uses Intl.NumberFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs number as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @example
 * <NumberField source="score" />
 * // renders the record { id: 1234, score: 567 } as
 * <span>567</span>
 *
 * <NumberField source="score" className="red" />
 * // renders the record { id: 1234, score: 567 } as
 * <span class="red">567</span>
 *
 * <NumberField source="share" options={{ style: 'percent' }} />
 * // renders the record { id: 1234, share: 0.2545 } as
 * <span>25%</span>
 *
 * <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>$25.99</span>
 *
 * <NumberField source="price" locales="fr-FR" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>25,99 $US</span>
 */
var NumberField = function NumberField(_ref) {
    var _ref$classes = _ref.classes,
        classes = _ref$classes === undefined ? {} : _ref$classes,
        className = _ref.className,
        record = _ref.record,
        source = _ref.source,
        locales = _ref.locales,
        options = _ref.options,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['classes', 'className', 'record', 'source', 'locales', 'options']);

    if (!record) return null;
    var value = (0, _get2.default)(record, source);
    if (value == null) return null;

    if (!hasNumberFormat) return _react2.default.createElement(
        'span',
        (0, _extends3.default)({
            className: (0, _classnames2.default)(classes.input, className)
        }, (0, _sanitizeRestProps2.default)(rest)),
        value
    );

    return _react2.default.createElement(
        'span',
        (0, _extends3.default)({
            className: (0, _classnames2.default)(classes.input, className)
        }, (0, _sanitizeRestProps2.default)(rest)),
        value.toLocaleString(locales, options)
    );
};

exports.NumberField = NumberField;
NumberField.propTypes = {
    addLabel: _propTypes2.default.bool,
    basePath: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    cellClassName: _propTypes2.default.string,
    headerClassName: _propTypes2.default.string,
    label: _propTypes2.default.string,
    locales: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    options: _propTypes2.default.object,
    record: _propTypes2.default.object,
    textAlign: _propTypes2.default.string,
    source: _propTypes2.default.string.isRequired
};

var ComposedNumberField = (0, _compose2.default)(_pure2.default, (0, _styles.withStyles)(styles))(NumberField);
ComposedNumberField.defaultProps = {
    addLabel: true,
    textAlign: 'right'
};
exports.default = ComposedNumberField;
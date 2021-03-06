'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleForm = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _raCore = require('ra-core');

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var anyTouched = _ref.anyTouched,
        array = _ref.array,
        asyncValidate = _ref.asyncValidate,
        asyncValidating = _ref.asyncValidating,
        autofill = _ref.autofill,
        blur = _ref.blur,
        change = _ref.change,
        clearAsyncError = _ref.clearAsyncError,
        clearFields = _ref.clearFields,
        clearSubmit = _ref.clearSubmit,
        clearSubmitErrors = _ref.clearSubmitErrors,
        destroy = _ref.destroy,
        dirty = _ref.dirty,
        dispatch = _ref.dispatch,
        form = _ref.form,
        formName = _ref.formName,
        handleSubmit = _ref.handleSubmit,
        initialValues = _ref.initialValues,
        initialize = _ref.initialize,
        initialized = _ref.initialized,
        pristine = _ref.pristine,
        pure = _ref.pure,
        redirect = _ref.redirect,
        reset = _ref.reset,
        resetSection = _ref.resetSection,
        save = _ref.save,
        submit = _ref.submit,
        submitFailed = _ref.submitFailed,
        submitSucceeded = _ref.submitSucceeded,
        submitting = _ref.submitting,
        touch = _ref.touch,
        translate = _ref.translate,
        triggerSubmit = _ref.triggerSubmit,
        untouch = _ref.untouch,
        valid = _ref.valid,
        validate = _ref.validate,
        props = (0, _objectWithoutProperties3.default)(_ref, ['anyTouched', 'array', 'asyncValidate', 'asyncValidating', 'autofill', 'blur', 'change', 'clearAsyncError', 'clearFields', 'clearSubmit', 'clearSubmitErrors', 'destroy', 'dirty', 'dispatch', 'form', 'formName', 'handleSubmit', 'initialValues', 'initialize', 'initialized', 'pristine', 'pure', 'redirect', 'reset', 'resetSection', 'save', 'submit', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'translate', 'triggerSubmit', 'untouch', 'valid', 'validate']);
    return props;
};

var SimpleForm = exports.SimpleForm = function (_Component) {
    (0, _inherits3.default)(SimpleForm, _Component);

    function SimpleForm() {
        var _ref2;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SimpleForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = SimpleForm.__proto__ || Object.getPrototypeOf(SimpleForm)).call.apply(_ref2, [this].concat(args))), _this), _this.handleSubmitWithRedirect = function () {
            var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.redirect;
            return _this.props.handleSubmit(function (values) {
                return _this.props.save(values, redirect);
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SimpleForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                basePath = _props.basePath,
                children = _props.children,
                className = _props.className,
                _props$classes = _props.classes,
                classes = _props$classes === undefined ? {} : _props$classes,
                formName = _props.formName,
                invalid = _props.invalid,
                pristine = _props.pristine,
                record = _props.record,
                resource = _props.resource,
                submitOnEnter = _props.submitOnEnter,
                toolbar = _props.toolbar,
                toolbarPosition = _props.toolbarPosition,
                version = _props.version,
                rest = (0, _objectWithoutProperties3.default)(_props, ['basePath', 'children', 'className', 'classes', 'formName', 'invalid', 'pristine', 'record', 'resource', 'submitOnEnter', 'toolbar', 'toolbarPosition', 'version']);


            return _react2.default.createElement(
                'form',
                (0, _extends3.default)({
                    className: (0, _classnames2.default)('simple-form', className)
                }, sanitizeRestProps(rest)),
                toolbar && toolbarPosition === 'top' && _react2.default.cloneElement(toolbar, {
                    handleSubmitWithRedirect: this.handleSubmitWithRedirect,
                    invalid: invalid,
                    pristine: pristine,
                    submitOnEnter: submitOnEnter
                }),
                _react2.default.createElement(
                    'div',
                    { className: classes.form, key: version },
                    _react.Children.map(children, function (input) {
                        return _react2.default.createElement(_FormInput2.default, {
                            basePath: basePath,
                            input: input,
                            record: record,
                            resource: resource
                        });
                    })
                ),
                toolbar && toolbarPosition === 'bottom' && _react2.default.cloneElement(toolbar, {
                    handleSubmitWithRedirect: this.handleSubmitWithRedirect,
                    invalid: invalid,
                    pristine: pristine,
                    submitOnEnter: submitOnEnter
                })
            );
        }
    }]);
    return SimpleForm;
}(_react.Component);

SimpleForm.propTypes = {
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    formName: _propTypes2.default.string,
    handleSubmit: _propTypes2.default.func, // passed by redux-form
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    record: _propTypes2.default.object,
    redirect: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    resource: _propTypes2.default.string,
    save: _propTypes2.default.func, // the handler defined in the parent, which triggers the REST submission
    submitOnEnter: _propTypes2.default.bool,
    toolbar: _propTypes2.default.element,
    toolbarPosition: _propTypes2.default.oneOf(['bottom', 'top']),
    validate: _propTypes2.default.func,
    version: _propTypes2.default.number
};

SimpleForm.defaultProps = {
    submitOnEnter: true,
    toolbar: _react2.default.createElement(_Toolbar2.default, null),
    toolbarPosition: 'bottom'
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(function (state, props) {
    return {
        initialValues: (0, _raCore.getDefaultValues)(state, props),
        form: props.formName || 'record-form'
    };
}), _raCore.translate, // Must be before reduxForm so that it can be used in validation
(0, _reduxForm.reduxForm)({
    destroyOnUnmount: false,
    enableReinitialize: true
}));

exports.default = enhance(SimpleForm);
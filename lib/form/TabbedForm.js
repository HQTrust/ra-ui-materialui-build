'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findTabsWithErrors = exports.TabbedForm = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _styles = require('@material-ui/core/styles');

var _raCore = require('ra-core');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    var _form;

    return {
        form: (_form = {}, (0, _defineProperty3.default)(_form, theme.breakpoints.up('sm'), {
            padding: '0 1em 1em 1em'
        }), (0, _defineProperty3.default)(_form, theme.breakpoints.down('xs'), {
            padding: '0 1em 5em 1em'
        }), _form),
        errorTabButton: { color: theme.palette.error.main }
    };
};

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
        handleSubmit = _ref.handleSubmit,
        initialize = _ref.initialize,
        initialized = _ref.initialized,
        initialValues = _ref.initialValues,
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
        props = (0, _objectWithoutProperties3.default)(_ref, ['anyTouched', 'array', 'asyncValidate', 'asyncValidating', 'autofill', 'blur', 'change', 'clearAsyncError', 'clearFields', 'clearSubmit', 'clearSubmitErrors', 'destroy', 'dirty', 'dispatch', 'form', 'handleSubmit', 'initialize', 'initialized', 'initialValues', 'pristine', 'pure', 'redirect', 'reset', 'resetSection', 'save', 'submit', 'submitFailed', 'submitSucceeded', 'submitting', 'touch', 'translate', 'triggerSubmit', 'untouch', 'valid', 'validate']);
    return props;
};

var TabbedForm = exports.TabbedForm = function (_Component) {
    (0, _inherits3.default)(TabbedForm, _Component);

    function TabbedForm(props) {
        (0, _classCallCheck3.default)(this, TabbedForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabbedForm.__proto__ || Object.getPrototypeOf(TabbedForm)).call(this, props));

        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };

        _this.handleSubmitWithRedirect = function () {
            var redirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.redirect;
            return _this.props.handleSubmit(function (values) {
                return _this.props.save(values, redirect);
            });
        };

        _this.state = {
            value: 0
        };
        return _this;
    }

    (0, _createClass3.default)(TabbedForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                basePath = _props.basePath,
                children = _props.children,
                className = _props.className,
                _props$classes = _props.classes,
                classes = _props$classes === undefined ? {} : _props$classes,
                invalid = _props.invalid,
                pristine = _props.pristine,
                record = _props.record,
                resource = _props.resource,
                submitOnEnter = _props.submitOnEnter,
                tabsWithErrors = _props.tabsWithErrors,
                toolbar = _props.toolbar,
                translate = _props.translate,
                version = _props.version,
                rest = (0, _objectWithoutProperties3.default)(_props, ['basePath', 'children', 'className', 'classes', 'invalid', 'pristine', 'record', 'resource', 'submitOnEnter', 'tabsWithErrors', 'toolbar', 'translate', 'version']);


            return _react2.default.createElement(
                'form',
                (0, _extends3.default)({
                    className: (0, _classnames2.default)('tabbed-form', className),
                    key: version
                }, sanitizeRestProps(rest)),
                _react2.default.createElement(
                    _Tabs2.default,
                    {
                        scrollable: true,
                        value: this.state.value,
                        onChange: this.handleChange,
                        indicatorColor: 'primary'
                    },
                    _react.Children.map(children, function (tab, index) {
                        return tab ? _react2.default.createElement(_Tab2.default, {
                            key: tab.props.label,
                            label: translate(tab.props.label, {
                                _: tab.props.label
                            }),
                            value: index,
                            icon: tab.props.icon,
                            className: (0, _classnames2.default)('form-tab', tabsWithErrors.includes(tab.props.label) && _this2.state.value !== index ? classes.errorTabButton : null)
                        }) : null;
                    })
                ),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: classes.form },
                    _react.Children.map(children, function (tab, index) {
                        return tab && _this2.state.value === index && _react2.default.cloneElement(tab, {
                            resource: resource,
                            record: record,
                            basePath: basePath
                        });
                    }),
                    toolbar && _react2.default.cloneElement(toolbar, {
                        className: 'toolbar',
                        handleSubmitWithRedirect: this.handleSubmitWithRedirect,
                        invalid: invalid,
                        pristine: pristine,
                        submitOnEnter: submitOnEnter
                    })
                )
            );
        }
    }]);
    return TabbedForm;
}(_react.Component);

TabbedForm.propTypes = {
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
    handleSubmit: _propTypes2.default.func, // passed by redux-form
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    record: _propTypes2.default.object,
    redirect: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
    resource: _propTypes2.default.string,
    save: _propTypes2.default.func, // the handler defined in the parent, which triggers the REST submission
    submitOnEnter: _propTypes2.default.bool,
    tabsWithErrors: _propTypes2.default.arrayOf(_propTypes2.default.string),
    toolbar: _propTypes2.default.element,
    translate: _propTypes2.default.func,
    validate: _propTypes2.default.func,
    version: _propTypes2.default.number
};

TabbedForm.defaultProps = {
    submitOnEnter: true,
    toolbar: _react2.default.createElement(_Toolbar2.default, null)
};

var collectErrors = function collectErrors(state) {
    var syncErrors = (0, _reduxForm.getFormSyncErrors)('record-form')(state);
    var asyncErrors = (0, _reduxForm.getFormAsyncErrors)('record-form')(state);
    var submitErrors = (0, _reduxForm.getFormSubmitErrors)('record-form')(state);

    return (0, _extends3.default)({}, syncErrors, asyncErrors, submitErrors);
};

var findTabsWithErrors = exports.findTabsWithErrors = function findTabsWithErrors(state, props) {
    var collectErrorsImpl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : collectErrors;

    var errors = collectErrorsImpl(state);

    return _react.Children.toArray(props.children).reduce(function (acc, child) {
        var inputs = _react.Children.toArray(child.props.children);

        if (inputs.some(function (input) {
            return errors[input.props.source];
        })) {
            return [].concat((0, _toConsumableArray3.default)(acc), [child.props.label]);
        }

        return acc;
    }, []);
};

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(function (state, props) {
    var children = _react.Children.toArray(props.children).reduce(function (acc, child) {
        return [].concat((0, _toConsumableArray3.default)(acc), (0, _toConsumableArray3.default)(_react.Children.toArray(child.props.children)));
    }, []);

    return {
        tabsWithErrors: findTabsWithErrors(state, props),
        initialValues: (0, _raCore.getDefaultValues)(state, (0, _extends3.default)({}, props, { children: children }))
    };
}), _raCore.translate, // Must be before reduxForm so that it can be used in validation
(0, _reduxForm.reduxForm)({
    form: 'record-form',
    destroyOnUnmount: false,
    enableReinitialize: true
}), (0, _styles.withStyles)(styles));

exports.default = enhance(TabbedForm);
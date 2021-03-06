'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Filter = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _FilterForm = require('./FilterForm');

var _FilterForm2 = _interopRequireDefault(_FilterForm);

var _FilterButton = require('./FilterButton');

var _FilterButton2 = _interopRequireDefault(_FilterButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    button: {},
    form: {}
};

var Filter = exports.Filter = function (_Component) {
    (0, _inherits3.default)(Filter, _Component);

    function Filter(props) {
        (0, _classCallCheck3.default)(this, Filter);
        return (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));
    }

    (0, _createClass3.default)(Filter, [{
        key: 'renderButton',
        value: function renderButton() {
            var _props = this.props,
                _props$classes = _props.classes,
                classes = _props$classes === undefined ? {} : _props$classes,
                context = _props.context,
                debounce = _props.debounce,
                resource = _props.resource,
                children = _props.children,
                showFilter = _props.showFilter,
                hideActiveFilters = _props.hideActiveFilters,
                showInactiveFilters = _props.showInactiveFilters,
                displayedFilters = _props.displayedFilters,
                filterButton = _props.filterButton,
                filterValues = _props.filterValues,
                shouldBulkToggleFilters = _props.shouldBulkToggleFilters;


            return _react2.default.createElement(_FilterButton2.default, {
                button: filterButton,
                className: classes.button,
                resource: resource,
                filters: _react2.default.Children.toArray(children),
                showFilter: showFilter,
                hideActiveFilters: hideActiveFilters,
                showInactiveFilters: showInactiveFilters,
                displayedFilters: displayedFilters,
                filterValues: filterValues,
                shouldBulkToggleFilters: shouldBulkToggleFilters
            });
        }
    }, {
        key: 'renderForm',
        value: function renderForm() {
            var _props2 = this.props,
                _props2$classes = _props2.classes,
                classes = _props2$classes === undefined ? {} : _props2$classes,
                context = _props2.context,
                debounce = _props2.debounce,
                resource = _props2.resource,
                children = _props2.children,
                hideFilter = _props2.hideFilter,
                displayedFilters = _props2.displayedFilters,
                formClasses = _props2.formClasses,
                inActionsToolbar = _props2.inActionsToolbar,
                metaSources = _props2.metaSources,
                showFilter = _props2.showFilter,
                filterValues = _props2.filterValues,
                setFilters = _props2.setFilters,
                shouldBulkToggleFilters = _props2.shouldBulkToggleFilters,
                setSourceActive = _props2.setSourceActive,
                rest = (0, _objectWithoutProperties3.default)(_props2, ['classes', 'context', 'debounce', 'resource', 'children', 'hideFilter', 'displayedFilters', 'formClasses', 'inActionsToolbar', 'metaSources', 'showFilter', 'filterValues', 'setFilters', 'shouldBulkToggleFilters', 'setSourceActive']);


            return _react2.default.createElement(_FilterForm2.default, (0, _extends3.default)({
                classes: formClasses,
                className: classes.form,
                resource: resource,
                filters: _react2.default.Children.toArray(children),
                hideFilter: hideFilter,
                displayedFilters: displayedFilters,
                inActionsToolbar: inActionsToolbar,
                initialValues: filterValues,
                setFilters: setFilters,
                shouldBulkToggleFilters: shouldBulkToggleFilters,
                setSourceActive: setSourceActive,
                metaSources: metaSources
            }, rest));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.context === 'button' ? this.renderButton() : this.renderForm();
        }
    }]);
    return Filter;
}(_react.Component);

Filter.propTypes = {
    children: _propTypes2.default.node,
    classes: _propTypes2.default.object,
    context: _propTypes2.default.oneOf(['form', 'button']),
    debounce: _propTypes2.default.number.isRequired,
    displayedFilters: _propTypes2.default.object,
    filterButton: _propTypes2.default.element,
    filterValues: _propTypes2.default.object,
    formClasses: _propTypes2.default.object,
    hideActiveFilters: _propTypes2.default.func,
    showInactiveFilters: _propTypes2.default.func,
    hideFilter: _propTypes2.default.func,
    inActionsToolbar: _propTypes2.default.bool,
    metaSources: _propTypes2.default.arrayOf(_propTypes2.default.string),
    setFilters: _propTypes2.default.func,
    setSourceActive: _propTypes2.default.func,
    shouldBulkToggleFilters: _propTypes2.default.bool,
    showFilter: _propTypes2.default.func,
    resource: _propTypes2.default.string.isRequired
};

Filter.defaultProps = {
    debounce: 500
};

exports.default = (0, _styles.withStyles)(styles)(Filter);
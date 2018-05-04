'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterButton = undefined;

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

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = require('material-ui/styles');

var _FilterList = require('material-ui-icons/FilterList');

var _FilterList2 = _interopRequireDefault(_FilterList);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _raCore = require('ra-core');

var _FilterButtonMenuItem = require('./FilterButtonMenuItem');

var _FilterButtonMenuItem2 = _interopRequireDefault(_FilterButtonMenuItem);

var _Button = require('../button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _https = require('https');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: { display: 'inline-block' },
    label: {
        marginLeft: '0.5em'
    }
};

var FilterButton = exports.FilterButton = function (_Component) {
    (0, _inherits3.default)(FilterButton, _Component);

    function FilterButton(props) {
        (0, _classCallCheck3.default)(this, FilterButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FilterButton.__proto__ || Object.getPrototypeOf(FilterButton)).call(this, props));

        _this.button = null;

        _this.state = {
            open: false
        };
        _this.handleClickButton = _this.handleClickButton.bind(_this);
        _this.toggleAllFilters = _this.toggleAllFilters.bind(_this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        _this.handleShow = _this.handleShow.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(FilterButton, [{
        key: 'getActiveFilterIds',
        value: function getActiveFilterIds() {
            var displayedFilters = this.props.displayedFilters;

            return Object.keys(displayedFilters);
        }
    }, {
        key: 'getHiddenFilters',
        value: function getHiddenFilters() {
            var _props = this.props,
                filters = _props.filters,
                displayedFilters = _props.displayedFilters,
                filterValues = _props.filterValues;

            return filters.filter(function (filterElement) {
                return !filterElement.props.alwaysOn && !displayedFilters[filterElement.props.source] && !filterValues[filterElement.props.source];
            });
        }
    }, {
        key: 'handleClickButton',
        value: function handleClickButton(event) {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                open: true,
                anchorEl: (0, _reactDom.findDOMNode)(this.button) // eslint-disable-line react/no-find-dom-node
            });
        }
    }, {
        key: 'toggleAllFilters',
        value: function toggleAllFilters(event) {
            // This prevents ghost click.
            event.preventDefault();

            var areFiltersVisible = this.state.open;

            if (areFiltersVisible) {
                this.props.hideActiveFilters();
            } else {
                this.props.showInactiveFilters();
            }

            this.setState({ open: !this.state.open });
        }
    }, {
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'handleShow',
        value: function handleShow(_ref) {
            var source = _ref.source,
                defaultValue = _ref.defaultValue;

            this.props.showFilter(source, defaultValue);
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var hiddenFilters = this.getHiddenFilters();
            var _props2 = this.props,
                button = _props2.button,
                _props2$classes = _props2.classes,
                classes = _props2$classes === undefined ? {} : _props2$classes,
                className = _props2.className,
                resource = _props2.resource,
                showFilter = _props2.showFilter,
                displayedFilters = _props2.displayedFilters,
                filterValues = _props2.filterValues,
                translate = _props2.translate,
                shouldBulkToggleFilters = _props2.shouldBulkToggleFilters,
                rest = (0, _objectWithoutProperties3.default)(_props2, ['button', 'classes', 'className', 'resource', 'showFilter', 'displayedFilters', 'filterValues', 'translate', 'shouldBulkToggleFilters']);
            var _state = this.state,
                open = _state.open,
                anchorEl = _state.anchorEl;


            if (shouldBulkToggleFilters) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, rest),
                    _react2.default.cloneElement(button, {
                        ref: function ref(node) {
                            _this2.button = node;
                        },
                        className: 'add-filter',
                        label: 'ra.action.add_filter',
                        onClick: this.toggleAllFilters
                    }, button.props.children || _react2.default.createElement(_FilterList2.default, null))
                );
            }

            return hiddenFilters.length > 0 && _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, rest),
                _react2.default.cloneElement(button, {
                    ref: function ref(node) {
                        _this2.button = node;
                    },
                    className: 'add-filter',
                    label: 'ra.action.add_filter',
                    onClick: this.handleClickButton
                }, button.props.children || _react2.default.createElement(_FilterList2.default, null)),
                _react2.default.createElement(
                    _Menu2.default,
                    {
                        open: open,
                        anchorEl: anchorEl,
                        onClose: this.handleRequestClose
                    },
                    hiddenFilters.map(function (filterElement) {
                        return _react2.default.createElement(_FilterButtonMenuItem2.default, {
                            key: filterElement.props.source,
                            filter: filterElement.props,
                            resource: resource,
                            onShow: _this2.handleShow
                        });
                    })
                )
            );
        }
    }]);
    return FilterButton;
}(_react.Component);

FilterButton.propTypes = {
    button: _propTypes2.default.element.isRequired,
    resource: _propTypes2.default.string.isRequired,
    filters: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
    displayedFilters: _propTypes2.default.object.isRequired,
    filterValues: _propTypes2.default.object.isRequired,
    showFilter: _propTypes2.default.func.isRequired,
    hideActiveFilters: _propTypes2.default.func.isRequired,
    showInactiveFilters: _propTypes2.default.func.isRequired,
    translate: _propTypes2.default.func.isRequired,
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    shouldBulkToggleFilters: _propTypes2.default.bool
};

FilterButton.defaultProps = {
    button: _react2.default.createElement(_Button2.default, null)
};

exports.default = (0, _compose2.default)(_raCore.translate, (0, _styles.withStyles)(styles))(FilterButton);
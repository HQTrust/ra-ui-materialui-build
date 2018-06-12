'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListView = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = require('@material-ui/core/styles');

var _Header = require('../layout/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('../layout/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _BulkActions = require('./BulkActions');

var _BulkActions2 = _interopRequireDefault(_BulkActions);

var _ListActions = require('./ListActions');

var _ListActions2 = _interopRequireDefault(_ListActions);

var _raCore = require('ra-core');

var _defaultTheme = require('../defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
var styles = {
    root: {},
    actions: {},
    header: {},
    noResults: { padding: 20 },
    filtersContainer: {},
    filtersContainerCollapsed: {}
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
    var authParams = _ref.authParams,
        TitleClass = _ref.TitleClass,
        children = _ref.children,
        classes = _ref.classes,
        className = _ref.className,
        filters = _ref.filters,
        pagination = _ref.pagination,
        actions = _ref.actions,
        resource = _ref.resource,
        hasCreate = _ref.hasCreate,
        hasEdit = _ref.hasEdit,
        hasList = _ref.hasList,
        hasShow = _ref.hasShow,
        filter = _ref.filter,
        filterValues = _ref.filterValues,
        crudGetList = _ref.crudGetList,
        changeListParams = _ref.changeListParams,
        perPage = _ref.perPage,
        title = _ref.title,
        data = _ref.data,
        ids = _ref.ids,
        total = _ref.total,
        totalAll = _ref.totalAll,
        initiallyEnabledSources = _ref.initiallyEnabledSources,
        isLoading = _ref.isLoading,
        translate = _ref.translate,
        version = _ref.version,
        push = _ref.push,
        history = _ref.history,
        locale = _ref.locale,
        location = _ref.location,
        match = _ref.match,
        options = _ref.options,
        params = _ref.params,
        permissions = _ref.permissions,
        q = _ref.query,
        selectedIds = _ref.selectedIds,
        setSelectedIds = _ref.setSelectedIds,
        sort = _ref.sort,
        theme = _ref.theme,
        toggleItem = _ref.toggleItem,
        emptyJsx = _ref.emptyJsx,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['authParams', 'TitleClass', 'children', 'classes', 'className', 'filters', 'pagination', 'actions', 'resource', 'hasCreate', 'hasEdit', 'hasList', 'hasShow', 'filter', 'filterValues', 'crudGetList', 'changeListParams', 'perPage', 'title', 'data', 'ids', 'total', 'totalAll', 'initiallyEnabledSources', 'isLoading', 'translate', 'version', 'push', 'history', 'locale', 'location', 'match', 'options', 'params', 'permissions', 'query', 'selectedIds', 'setSelectedIds', 'sort', 'theme', 'toggleItem', 'emptyJsx']);
    return rest;
};

var ListView = function ListView(_ref2) {
    var TitleClass = _ref2.TitleClass,
        _ref2$actions = _ref2.actions,
        actions = _ref2$actions === undefined ? _react2.default.createElement(_ListActions2.default, null) : _ref2$actions,
        basePath = _ref2.basePath,
        _ref2$bulkActions = _ref2.bulkActions,
        bulkActions = _ref2$bulkActions === undefined ? _react2.default.createElement(_BulkActions2.default, null) : _ref2$bulkActions,
        children = _ref2.children,
        className = _ref2.className,
        _ref2$classes = _ref2.classes,
        classes = _ref2$classes === undefined ? {} : _ref2$classes,
        currentSort = _ref2.currentSort,
        data = _ref2.data,
        defaultTitle = _ref2.defaultTitle,
        disableSource = _ref2.disableSource,
        displayedFilters = _ref2.displayedFilters,
        emptyJsx = _ref2.emptyJsx,
        enableSource = _ref2.enableSource,
        enabledSources = _ref2.enabledSources,
        filterValues = _ref2.filterValues,
        filters = _ref2.filters,
        hasCreate = _ref2.hasCreate,
        hideActiveFilters = _ref2.hideActiveFilters,
        hideFilter = _ref2.hideFilter,
        hideHeader = _ref2.hideHeader,
        ids = _ref2.ids,
        isLoading = _ref2.isLoading,
        metaSources = _ref2.metaSources,
        onSelect = _ref2.onSelect,
        onToggleItem = _ref2.onToggleItem,
        onUnselectItems = _ref2.onUnselectItems,
        page = _ref2.page,
        _ref2$pagination = _ref2.pagination,
        pagination = _ref2$pagination === undefined ? _react2.default.createElement(_Pagination2.default, null) : _ref2$pagination,
        perPage = _ref2.perPage,
        refresh = _ref2.refresh,
        resource = _ref2.resource,
        selectedIds = _ref2.selectedIds,
        setFilters = _ref2.setFilters,
        setPage = _ref2.setPage,
        setSort = _ref2.setSort,
        setSourceActive = _ref2.setSourceActive,
        showFilter = _ref2.showFilter,
        showInactiveFilters = _ref2.showInactiveFilters,
        title = _ref2.title,
        total = _ref2.total,
        totalAll = _ref2.totalAll,
        translate = _ref2.translate,
        version = _ref2.version,
        rest = (0, _objectWithoutProperties3.default)(_ref2, ['TitleClass', 'actions', 'basePath', 'bulkActions', 'children', 'className', 'classes', 'currentSort', 'data', 'defaultTitle', 'disableSource', 'displayedFilters', 'emptyJsx', 'enableSource', 'enabledSources', 'filterValues', 'filters', 'hasCreate', 'hideActiveFilters', 'hideFilter', 'hideHeader', 'ids', 'isLoading', 'metaSources', 'onSelect', 'onToggleItem', 'onUnselectItems', 'page', 'pagination', 'perPage', 'refresh', 'resource', 'selectedIds', 'setFilters', 'setPage', 'setSort', 'setSourceActive', 'showFilter', 'showInactiveFilters', 'title', 'total', 'totalAll', 'translate', 'version']);

    var titleElement = _react2.default.createElement(TitleClass, {
        defaultTitle: defaultTitle,
        title: title,
        total: totalAll
    });

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
            className: (0, _classnames3.default)('list-page', classes.root, className)
        }, sanitizeRestProps(rest)),
        !hideHeader && _react2.default.createElement(_Header2.default, {
            className: classes.header,
            title: titleElement,
            actions: _react2.default.cloneElement(actions, {
                className: classes.actions
            }),
            actionProps: {
                basePath: basePath,
                bulkActions: bulkActions,
                displayedFilters: displayedFilters,
                filters: filters,
                filterValues: filterValues,
                hasCreate: hasCreate,
                hideActiveFilters: hideActiveFilters,
                showInactiveFilters: showInactiveFilters,
                hideFilter: hideFilter,
                onUnselectItems: onUnselectItems,
                refresh: refresh,
                resource: resource,
                selectedIds: selectedIds,
                setFilters: setFilters,
                showFilter: showFilter,
                total: total
            }
        }),
        filters && _react2.default.createElement(
            _Card2.default,
            {
                classes: {
                    root: (0, _classnames3.default)(classes.filtersContainer, (0, _defineProperty3.default)({}, classes.filtersContainerCollapsed, Object.keys(displayedFilters).length === 0))
                }
            },
            _react2.default.cloneElement(filters, {
                displayedFilters: displayedFilters,
                enableSource: enableSource,
                enabledSources: enabledSources,
                disableSource: disableSource,
                filterValues: filterValues,
                hideFilter: hideFilter,
                hideActiveFilters: hideActiveFilters,
                metaSources: metaSources,
                resource: resource,
                setFilters: setFilters,
                setSourceActive: setSourceActive,
                total: total,
                context: 'form'
            })
        ),
        isLoading || total > 0 ? _react2.default.createElement(
            'div',
            { key: version },
            children && _react2.default.cloneElement(children, {
                basePath: basePath,
                currentSort: currentSort,
                data: data,
                enabledSources: enabledSources,
                hasBulkActions: !!bulkActions,
                ids: ids,
                isLoading: isLoading,
                onSelect: onSelect,
                onToggleItem: onToggleItem,
                resource: resource,
                selectedIds: selectedIds,
                setFilters: setFilters,
                setSort: setSort,
                total: total,
                version: version
            }),
            !isLoading && !ids.length && _react2.default.createElement(
                _CardContent2.default,
                { style: styles.noResults },
                _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'body1' },
                    translate('ra.navigation.no_more_results', {
                        page: page
                    })
                )
            ),
            pagination && _react2.default.cloneElement(pagination, {
                page: page,
                perPage: perPage,
                setPage: setPage,
                total: total
            })
        ) : emptyJsx ? emptyJsx : _react2.default.createElement(
            _CardContent2.default,
            { className: classes.noResults },
            _react2.default.createElement(
                _Typography2.default,
                { variant: 'body1' },
                translate('ra.navigation.no_results')
            )
        )
    );
};

exports.ListView = ListView;
ListView.propTypes = {
    TitleClass: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired,
    actions: _propTypes2.default.element,
    basePath: _propTypes2.default.string,
    bulkActions: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.element]),
    children: _propTypes2.default.element,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    currentSort: _propTypes2.default.shape({
        field: _propTypes2.default.string,
        order: _propTypes2.default.string
    }),
    data: _propTypes2.default.object,
    defaultTitle: _propTypes2.default.string,
    disableSource: _propTypes2.default.func,
    displayedFilters: _propTypes2.default.object,
    emptyJsx: _propTypes2.default.node,
    enableSource: _propTypes2.default.func,
    enabledSources: _propTypes2.default.object,
    filterValues: _propTypes2.default.object,
    filters: _propTypes2.default.element,
    hasCreate: _propTypes2.default.bool,
    hideActiveFilters: _propTypes2.default.func,
    hideFilter: _propTypes2.default.func,
    hideHeader: _propTypes2.default.bool,
    ids: _propTypes2.default.array,
    isLoading: _propTypes2.default.bool,
    metaSources: _propTypes2.default.arrayOf(_propTypes2.default.string),
    onSelect: _propTypes2.default.func,
    onToggleItem: _propTypes2.default.func,
    onUnselectItems: _propTypes2.default.func,
    page: _propTypes2.default.number,
    pagination: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.element]),
    perPage: _propTypes2.default.number,
    refresh: _propTypes2.default.func,
    resource: _propTypes2.default.string,
    selectedIds: _propTypes2.default.array,
    setFilters: _propTypes2.default.func,
    setPage: _propTypes2.default.func,
    setSort: _propTypes2.default.func,
    setSourceActive: _propTypes2.default.func,
    showFilter: _propTypes2.default.func,
    showInactiveFilters: _propTypes2.default.func,
    title: _propTypes2.default.any,
    total: _propTypes2.default.number,
    totalAll: _propTypes2.default.number,
    translate: _propTypes2.default.func,
    version: _propTypes2.default.number
};

/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * In Redux terms, <List> is a connected component, and <Datagrid> is a dumb component.
 *
 * Props:
 *   - title
 *   - perPage
 *   - sort
 *   - filter (the permanent filter to apply to the query)
 *   - actions
 *   - filters (a React Element used to display the filter form)
 *   - pagination
 *
 * @example
 *     const PostFilter = (props) => (
 *         <Filter {...props}>
 *             <TextInput label="Search" source="q" alwaysOn />
 *             <TextInput label="Title" source="title" />
 *         </Filter>
 *     );
 *     export const PostList = (props) => (
 *         <List {...props}
 *             title="List of posts"
 *             sort={{ field: 'published_at' }}
 *             filter={{ is_published: true }}
 *             filters={<PostFilter />}
 *         >
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="title" />
 *                 <EditButton />
 *             </Datagrid>
 *         </List>
 *     );
 */
var List = function List(props) {
    return _react2.default.createElement(
        _raCore.ListController,
        props,
        function (controllerProps) {
            return _react2.default.createElement(ListView, (0, _extends3.default)({}, props, controllerProps));
        }
    );
};

List.propTypes = {
    // the props you can change
    TitleClass: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired,
    actions: _propTypes2.default.element,
    bulkActions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.bool]),
    children: _propTypes2.default.node,
    classes: _propTypes2.default.object,
    className: _propTypes2.default.string,
    emptyJsx: _propTypes2.default.node,
    initiallyEnabledSources: _propTypes2.default.arrayOf(_propTypes2.default.string),
    metaSources: _propTypes2.default.arrayOf(_propTypes2.default.string),
    filter: _propTypes2.default.object,
    filters: _propTypes2.default.element,
    pagination: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.element]),
    perPage: _propTypes2.default.number.isRequired,
    sort: _propTypes2.default.shape({
        field: _propTypes2.default.string,
        order: _propTypes2.default.string
    }),
    title: _propTypes2.default.any,
    // the props managed by react-admin
    authProvider: _propTypes2.default.func,
    hasCreate: _propTypes2.default.bool.isRequired,
    hasEdit: _propTypes2.default.bool.isRequired,
    hasList: _propTypes2.default.bool.isRequired,
    hasShow: _propTypes2.default.bool.isRequired,
    location: _propTypes2.default.object.isRequired,
    match: _propTypes2.default.object.isRequired,
    path: _propTypes2.default.string,
    resource: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object.isRequired
};

List.defaultProps = {
    TitleClass: _Title2.default,
    filter: {},
    perPage: 10,
    theme: _defaultTheme2.default
};

exports.default = (0, _styles.withStyles)(styles)(List);
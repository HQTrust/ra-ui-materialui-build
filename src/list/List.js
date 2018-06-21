/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Header from '../layout/Header';
import Title from '../layout/Title';
import DefaultPagination from './Pagination';
import DefaultBulkActions from './BulkActions';
import DefaultActions from './ListActions';
import { ListController } from 'ra-core';
import defaultTheme from '../defaultTheme';

const styles = {
    root: {},
    actions: {},
    header: {},
    noResults: { padding: 20 },
    filtersContainer: {},
    filtersContainerCollapsed: {},
};

const sanitizeRestProps = ({
    authParams,
    TitleClass,
    children,
    classes,
    className,
    filters,
    pagination,
    actions,
    resource,
    hasCreate,
    hasEdit,
    hasList,
    hasShow,
    filter,
    filterValues,
    crudGetList,
    changeListParams,
    perPage,
    title,
    data,
    ids,
    total,
    totalAll,
    initiallyEnabledSources,
    isLoading,
    translate,
    version,
    push,
    history,
    locale,
    location,
    match,
    options,
    params,
    permissions,
    query: q,
    selectedIds,
    setSelectedIds,
    sort,
    theme,
    toggleItem,
    ...rest
}) => rest;

export const ListView = ({
    TitleClass,
    actions = <DefaultActions />,
    basePath,
    bulkActions = <DefaultBulkActions />,
    children,
    className,
    classes = {},
    currentSort,
    data,
    defaultTitle,
    disableSource,
    displayedFilters,
    enableSource,
    enabledSources,
    filterValues,
    filters,
    hasCreate,
    hideActiveFilters,
    hideFilter,
    hideHeader,
    ids,
    isLoading,
    metaSources,
    onSelect,
    onToggleItem,
    onUnselectItems,
    page,
    pagination = <DefaultPagination />,
    perPage,
    refresh,
    resource,
    selectedIds,
    setFilters,
    setFiltersImmediate,
    setPage,
    setSort,
    setSourceActive,
    showFilter,
    showInactiveFilters,
    title,
    total,
    totalAll,
    translate,
    version,
    ...rest
}) => {
    const titleElement = (
        <TitleClass
            defaultTitle={defaultTitle}
            title={title}
            total={totalAll}
        />
    );

    return (
        <div
            className={classnames('list-page', classes.root, className)}
            {...sanitizeRestProps(rest)}
        >
            {!hideHeader &&
                <Header
                    className={classes.header}
                    title={titleElement}
                    actions={React.cloneElement(actions, {
                        className: classes.actions,
                    })}
                    actionProps={{
                        basePath,
                        bulkActions,
                        displayedFilters,
                        filters,
                        filterValues,
                        hasCreate,
                        hideActiveFilters,
                        showInactiveFilters,
                        hideFilter,
                        onUnselectItems,
                        refresh,
                        resource,
                        selectedIds,
                        setFilters,
                        setFiltersImmediate,
                        showFilter,
                        total,
                    }}
                />
            }
            {filters && (
                <Card
                    classes={{
                        root: classnames(classes.filtersContainer, {
                            [classes.filtersContainerCollapsed]:
                                Object.keys(displayedFilters).length === 0,
                        }),
                    }}
                >
                    {React.cloneElement(filters, {
                        displayedFilters,
                        enableSource,
                        enabledSources,
                        disableSource,
                        filterValues,
                        hideFilter,
                        hideActiveFilters,
                        metaSources,
                        resource,
                        setFilters,
                        setFiltersImmediate,
                        setSourceActive,
                        total,
                        context: 'form',
                    })}
                </Card>
            )}

            <div key={version}>
                {children &&
                    React.cloneElement(children, {
                        basePath,
                        currentSort,
                        data,
                        enabledSources,
                        filterValues,
                        hasBulkActions: !!bulkActions,
                        ids,
                        isLoading,
                        onSelect,
                        onToggleItem,
                        resource,
                        selectedIds,
                        setFilters,
                        setFiltersImmediate,
                        setSort,
                        total,
                        version,
                    })}

                {pagination && total > 0 &&
                    React.cloneElement(pagination, {
                        page,
                        perPage,
                        setPage,
                        total,
                    })}
            </div>
        </div>
    );
};

ListView.propTypes = {
    TitleClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    actions: PropTypes.element,
    basePath: PropTypes.string,
    bulkActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    children: PropTypes.element,
    className: PropTypes.string,
    classes: PropTypes.object,
    currentSort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    data: PropTypes.object,
    defaultTitle: PropTypes.string,
    disableSource: PropTypes.func,
    displayedFilters: PropTypes.object,
    enableSource: PropTypes.func,
    enabledSources: PropTypes.object,
    filterValues: PropTypes.object,
    filters: PropTypes.element,
    hasCreate: PropTypes.bool,
    hideActiveFilters: PropTypes.func,
    hideFilter: PropTypes.func,
    hideHeader: PropTypes.bool,
    ids: PropTypes.array,
    isLoading: PropTypes.bool,
    metaSources: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUnselectItems: PropTypes.func,
    page: PropTypes.number,
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    perPage: PropTypes.number,
    refresh: PropTypes.func,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
    setFilters: PropTypes.func,
    setFiltersImmediate: PropTypes.func,
    setPage: PropTypes.func,
    setSort: PropTypes.func,
    setSourceActive: PropTypes.func,
    showFilter: PropTypes.func,
    showInactiveFilters: PropTypes.func,
    title: PropTypes.any,
    total: PropTypes.number,
    totalAll: PropTypes.number,
    translate: PropTypes.func,
    version: PropTypes.number,
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
const List = props => (
    <ListController {...props}>
        {controllerProps => <ListView {...props} {...controllerProps} />}
    </ListController>
);

List.propTypes = {
    // the props you can change
    TitleClass: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    actions: PropTypes.element,
    bulkActions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    initiallyEnabledSources: PropTypes.arrayOf(PropTypes.string),
    metaSources: PropTypes.arrayOf(PropTypes.string),
    filter: PropTypes.object,
    filters: PropTypes.element,
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    perPage: PropTypes.number.isRequired,
    sort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    title: PropTypes.any,
    // the props managed by react-admin
    authProvider: PropTypes.func,
    hasCreate: PropTypes.bool.isRequired,
    hasEdit: PropTypes.bool.isRequired,
    hasList: PropTypes.bool.isRequired,
    hasShow: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    path: PropTypes.string,
    resource: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};

List.defaultProps = {
    TitleClass: Title,
    filter: {},
    perPage: 10,
    theme: defaultTheme,
};

export default withStyles(styles)(List);

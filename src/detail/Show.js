import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ShowController } from 'ra-core';

import Header from '../layout/Header';
import DefaultActions from './ShowActions';
import RecordTitle from '../layout/RecordTitle';

const sanitizeRestProps = ({
    actions,
    title,
    children,
    classes,
    className,
    crudGetOne,
    id,
    data,
    isLoading,
    resource,
    hasCreate,
    hasEdit,
    hasList,
    hasShow,
    translate,
    version,
    match,
    location,
    history,
    options,
    locale,
    permissions,
    ...rest
}) => rest;

const ShowView = ({
    actions = <DefaultActions />,
    basePath,
    children,
    classes = {},
    className,
    defaultTitle,
    hasEdit,
    hasList,
    isLoading,
    record,
    resource,
    title,
    version,
    ...rest
}) => (
    <div
        className={classnames('show-page', className)}
        {...sanitizeRestProps(rest)}
    >
        <div className={classes.card} style={{ opacity: isLoading ? 0.8 : 1 }}>
            <Header
                className={classes.header}
                title={
                    <RecordTitle
                        title={title}
                        record={record}
                        defaultTitle={defaultTitle}
                    />
                }
                actions={actions}
                actionProps={{
                    basePath,
                    data: record,
                    hasList,
                    hasEdit,
                    record,
                    resource,
                }}
            />
            {record &&
                React.cloneElement(children, {
                    resource,
                    basePath,
                    record,
                    version,
                })}
        </div>
    </div>
);

ShowView.propTypes = {
    actions: PropTypes.element,
    basePath: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    classes: PropTypes.object,
    defaultTitle: PropTypes.any,
    hasEdit: PropTypes.bool,
    hasList: PropTypes.bool,
    isLoading: PropTypes.bool,
    record: PropTypes.object,
    resource: PropTypes.string,
    title: PropTypes.any,
    version: PropTypes.number,
};

/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes pass the `record` as prop.
 *
 * The `<Show>` component accepts the following props:
 *
 * - title
 * - actions
 *
 * Both expect an element for value.
 *
 * @example
 *     // in src/posts.js
 *     import React from 'react';
 *     import { Show, SimpleShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <SimpleShowLayout>
 *                 <TextField source="title" />
 *             </SimpleShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import React from 'react';
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
const Show = props => (
    <ShowController {...props}>
        {controllerProps => <ShowView {...props} {...controllerProps} />}
    </ShowController>
);

Show.propTypes = {
    actions: PropTypes.element,
    children: PropTypes.element,
    className: PropTypes.string,
    hasCreate: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
};

export default Show;

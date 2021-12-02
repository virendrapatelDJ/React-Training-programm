import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
export default function Dashboard() {
  return (
    <DocumentTitle title="DashBoard">
      <Fragment>
        <h1>DashBoard</h1>
        <ul>
          <li>
            <Link to="add-users">Users+ </Link>
          </li>
          <li>
            <Link to="add-admins">Admin+ </Link>
          </li>

          <li>
            <Link to="./">Dashboard Home</Link>
          </li>
        </ul>
        <Outlet />
      </Fragment>
    </DocumentTitle>
  );
}

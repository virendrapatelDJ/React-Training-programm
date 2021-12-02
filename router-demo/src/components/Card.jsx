import React from 'react';
import DocumentTitle from 'react-document-title';
import {lorem , internet , name } from 'faker'

export default function Card({ title, count }) {
  return (
    <DocumentTitle title={title}>
    <div>
      <h1>{title}</h1>
      <p>{lorem.paragraphs(count)}</p>
      <p>{internet.email()}</p>
      <p>{name.findName()} {name.lastName()}</p>
    </div>
    </DocumentTitle>
  );
}

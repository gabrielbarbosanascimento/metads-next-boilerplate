import React from 'react';
import TableStyles from './table.styles';

export const MetaTable = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return <TableStyles>{children}</TableStyles>;
};

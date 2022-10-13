import React from 'react';

export const Tabs = ({ tabs, renderTab }) => {
  if (!tabs) return null;
  return <div>{tabs.map(({ id }) => renderTab(id))}</div>;
};

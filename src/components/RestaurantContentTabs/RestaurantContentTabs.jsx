import React, { useMemo } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../Tab/Tab';
import { RESTAURANT_CONTENT_TABS } from './constants';

export const RestaurantContentTabs = ({ onTabSelect }) => {
  const tabIndexes = RESTAURANT_CONTENT_TABS.map((_, i) => i);

  return (
    <Tabs
      tabs={tabIndexes}
      renderTab={(index) => (
        <Tab
          name={RESTAURANT_CONTENT_TABS[index]}
          onClick={() => onTabSelect(index)}
        />
      )}
    />
  );
};

export const RestaurantContentTabsWithMemo = React.memo(RestaurantContentTabs);

import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { RestaurantTab } from '../RestaurantTab/RestaurantTab';
import { RESTAURANT_CONTENT_TABS } from './constants';

export const RestaurantContentTabs = () => {
  const tabIndexes = RESTAURANT_CONTENT_TABS.map((_, i) => i);

  return (
    <Tabs
      tabs={tabIndexes}
      renderTab={(index) => (
        <RestaurantTab
          key={index}
          id={`${RESTAURANT_CONTENT_TABS[index]}`}
          name={RESTAURANT_CONTENT_TABS[index]}
        />
      )}
    />
  );
};

export const RestaurantContentTabsWithMemo = React.memo(RestaurantContentTabs);

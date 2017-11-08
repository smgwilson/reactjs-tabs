import React, { Component } from 'react';
import Hello from './Hello';
import Tabs from './Tabs';
import Tab from './Tab';

const App = () => (
  <Tabs>
    <Tab title="First Tab">
      <Hello name="from Sheri" />
      <p>
        This is the content of the first tab.
        It can be anything at all.
      </p>
    </Tab>
    <Tab title="Second Tab">
      <p>
        <Hello name="from Sheri" />
        A tab should just render it's children.
      </p>
    </Tab>
    <Tab title="Third Tab">
      <Hello name="from Sheri" />
      <p>
        TODO: Passing a selected number to the Tabs will
        select the tab with the proper index 
       </p>
    </Tab>
  </Tabs>
);

export default App;




import React from 'react';

import Header from '../../components/Layout/header';

export default {
  title: 'Layout/Header',
  component: Header
};

const Template = (args: any) => <Header {...args} />;

export const Regular = Template.bind({});
Regular.args = {};

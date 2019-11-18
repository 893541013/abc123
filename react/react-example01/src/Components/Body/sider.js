import { Menu, Icon, Switch } from 'antd';
import React from 'react';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };
}

import React, {FC} from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { Header, Footer, Content, Sider } = Layout;

const App: FC = () => {
  return (
    <Router>
      <Switch></Switch>
    </Router>
  );
}

export default App;

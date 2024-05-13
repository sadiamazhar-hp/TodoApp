import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return (
        /*It starts with <Layout>, indicating that the component is using a layout component to structure its content. 
        This layout component likely contains common UI elements shared across multiple pages of the application. */
          <Layout>
              <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
//<Routes> is likely provided by a routing library such as React Router.
//The ...rest syntax collects all other properties of the route configuration object (excluding element) into the rest variable.
//
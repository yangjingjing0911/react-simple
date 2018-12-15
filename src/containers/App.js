import React, { Component } from 'react';
import Header from 'comp/header';
import Layout from 'comp/layout';
import Footer from 'comp/footer';

import 'common/css/style.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Header></Header>
        <Layout></Layout>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

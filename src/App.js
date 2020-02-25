import React from 'react';
import Layout from './containers/Layout/Layout';
import MovieBuilder from './containers/MovieBuilder/MovieBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Layout>
             <MovieBuilder />
      </Layout>
    </div>
  );
}

export default App;

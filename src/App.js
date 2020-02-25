import React from 'react';
import Layout from './containers/Layout/Layout';
import MovieBuilder from './containers/MovieBuilder/MovieBuilder';

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

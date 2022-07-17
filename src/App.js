/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import GitHubProvider from "./Providers/GitHubProvider";

function App() {
  return (
    <main>
      <GitHubProvider>
        <Layout>
          <Profile />
          <Repos />
        </Layout>
      </GitHubProvider>
    </main>
  );
}

export default App;

import React from 'react'
import UserResults from '../components/users/UserResults';
function Home() {
  return (
    <>
      <h1 className="text-6xl">Homepage</h1>
      {/* SEARCH COMPONENT */}
      <UserResults />
      {process.env.REACT_APP_GITHUB_TOKEN}
      {process.env.REACT_APP_GITHUB_URL}
    </>
  );
}

export default Home
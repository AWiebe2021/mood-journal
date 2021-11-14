import React from 'react';
import EntryList from '../components/EntryList';
import EntryForm from '../components/EntryForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ENTRYS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ENTRYS);
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  const entrys = data?.entrys || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <EntryForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EntryList
              entrys={entrys}
              title="Some Feed for Entry(s)..."
            />
          )}
        </div>
        {/* {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
           />
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Home;

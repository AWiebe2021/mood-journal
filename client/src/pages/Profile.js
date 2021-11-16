
import React from "react";
import { Redirect, useParams } from "react-router-dom";

import LineChart from "./line.js";

import EntryForm from "../components/EntryForm";
import EntryList from "../components/EntryList";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";




const Profile = (props) => {
  const { username: userParam } = useParams();


  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (

    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-secondary col-12">
        {/* <canvas id="myChart" width="400" height="400"></canvas> */}
        <>
<LineChart/>
    </>

        </h2>
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <EntryList
            entrys={user.entrys}
            title={`${user.username}"s entrys...`}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <EntryForm />}</div>
    </div>
  );
};

export default Profile;

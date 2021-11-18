import React from "react";
import EntryForm from "../components/EntryForm";
import Auth from "../utils/auth";

import Slideshow from "../components/SlideShow";




const Home = () => {
  // const { loading, data } = useQuery(QUERY_ENTRYS);
  // const entrys = data?.entrys || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>      
      <div className="flex-row justify-space-between">
      {!loggedIn && (
        <div className="col-12 mb-3">
            <Slideshow />
        </div>
      )}
        {loggedIn && (
          <div className="col-12 mb-3">
            <EntryForm />
          </div>
        )}
      </div>
      <div>
      </div>
    </main>
  );
};

export default Home;

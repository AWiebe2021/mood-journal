import React from 'react';
import { useParams } from 'react-router-dom';

// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ENTRY } from '../utils/queries';

const SingleEntry = (props) => {
  const { id: entryId } = useParams();

  const { loading, data } = useQuery(QUERY_ENTRY, {
    variables: { id: entryId },
  });

  const entry = data?.entry || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {entry.username}
          </span>{' '}
          entry on {entry.createdAt}
        </p>
        <div className="card-body">
          <p>{entry.entryText}</p>
          
        </div>
      </div>
    </div>
  );
};

export default SingleEntry;

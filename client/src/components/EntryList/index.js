import React from 'react';
import { Link } from 'react-router-dom';

const EntryList = ({ entrys, title }) => {
  if (!entrys.length) {
    return <h3>No Entrys Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {entrys &&
        entrys.map(entry => (
          <div key={entry._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${entry.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {entry.username}
              </Link>{' '}
              entry on {entry.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/entry/${entry._id}`}>
                <p>{entry.entryText}</p>
                <p className="mb-0">
                  Reactions: {entry.reactionCount} || Click to{' '}
                  {entry.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EntryList;

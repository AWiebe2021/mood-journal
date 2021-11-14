const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema(
  {
    entryText: {
      type: String,
<<<<<<< HEAD:server/models/Thought.js
      required: 'Type Your Entry!',
=======
      required: 'You need to leave a entry!',
>>>>>>> 19afa1eed0eac4b9354b330af5cef0955725cd1e:server/models/Entry.js
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Entry = model('Entry', entrySchema);

module.exports = Entry;

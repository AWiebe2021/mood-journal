const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema(
  {
    entryText: {
      type: String,
      required: 'You need to leave a entry!',
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
    // sleepSlider: {
    //   type: Number,
    //   required: true
    // },
    // dietSlider: {
    //   type: Number,
    //   required: true
    // },
    // moodSlider: {
    //   type: Number,
    //   required: true
    // }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Entry = model('Entry', entrySchema);

module.exports = Entry;

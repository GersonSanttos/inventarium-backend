const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema(
  {
    peopleName: String,
    peopleSurname: String,
    peopleBond: String,
    peopleCPF: Number,
    peopleStatus: String,

    peopleInsertionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'people' }
);

module.exports = mongoose.model('Post2', peopleSchema);

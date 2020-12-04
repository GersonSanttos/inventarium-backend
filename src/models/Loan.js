const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    loanId: String,
    loanDate: Date,
    loanDateDevolutionPrevison: Date,
    loanDateDevolution: Date,
    loanStatus: String,
    loanIdUser: String,
    loanIdEmployee: String,
    loanIdEquipment: String,

    loanInsertionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'loan' }
);

module.exports = mongoose.model('Post3', loanSchema);

const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema(
  {
    equipmentTipping: String,
    equipmentTippingDate: Date,
    equipmentBrand: String,
    equipmentName: String,
    equipmentModel: String,
    equipmentType: String,
    equipmentStatus: String,

    equipmentInsertionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'equipment' }
);


module.exports = mongoose.model('Post1', equipmentSchema);

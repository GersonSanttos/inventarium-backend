const mongoose = require('mongoose');
// const { promisify } = require('util');

// const s3 = new aws.S3();

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

// PostSchema.pre('save', function () {
//   if (!this.url) {
//     this.url = `${process.env.APP_URL}/files/${this.key}`;
//   }
// });

// PostSchema.pre('remove', function () {
//   if (process.env.STORAGE_TYPE === 's3') {
//     return s3
//       .deleteObject({
//         Bucket: process.env.BUCKET_NAME,
//         Key: this.key,
//       })
//       .promise()
//       .then((response) => {
//         console.log(response.status);
//       })
//       .catch((response) => {
//         console.log(response.status);
//       });
//   } else {
//     return promisify(fs.unlink)(
//       path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key)
//     );
//   }
// });

module.exports = mongoose.model('Post1', equipmentSchema);

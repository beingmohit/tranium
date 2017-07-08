const s3 = require('s3');
const path = require('path');

var client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.AWS_REGION || ''
  },
});

var params = {
  localDir: path.join(__dirname, '../build/frontend'),
  deleteRemoved: true,
  s3Params: {
    Bucket: process.env.S3_BUCKET || ''
  },
};

var uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error("s3 sync - unable to sync:", err.stack);
});

uploader.on('progress', function() {
  
});

uploader.on('end', function() {
  console.log("s3 sync - done uploading");
  console.log(`http://${process.env.S3_BUCKET}.s3-website-us-east-1.amazonaws.com`)
});
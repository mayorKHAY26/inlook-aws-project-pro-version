const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../config/aws");

const uploadToS3 = async ({ fileBuffer, fileName, mimeType }) => {
  const bucketName = process.env.S3_BUCKET_NAME;

  if (!bucketName) {
    throw new Error("S3_BUCKET_NAME is not configured");
  }

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: fileBuffer,
    ContentType: mimeType
  });

  await s3Client.send(command);

  return `https://${bucketName}.s3.amazonaws.com/${fileName}`;
};

module.exports = {
  uploadToS3
};
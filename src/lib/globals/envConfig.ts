const isDevelopment = process.env.NODE_ENV === 'development';
const s3BucketName = isDevelopment ? 'promptvision-development' : 'promptvision-prod';

export { isDevelopment, s3BucketName };

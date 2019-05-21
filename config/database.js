module.exports = {
  'secret':'meansecure',
  'database': process.env.MONGODB_URI||'mongodb://localhost/mean-secure'
};

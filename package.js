Package.describe({
  summary: "SHA256 HMAC and base64 from CryptoJS repackaged for meteor"
});

Package.on_use(function (api, where) {
  api.add_files('hmac-sha256.js', ['client', 'server']);
  api.add_files('enc-base64-min.js', ['client', 'server']);

  api.export && api.export('CryptoJS');
});

/** tests
Package.on_test(function (api) {
  api.use(['crypto-hmac-sha256-base64', 'tinytest']);    

  api.add_files('crypto-hmac-sha256-base64_tests.js', ['client', 'server']);
});
*/

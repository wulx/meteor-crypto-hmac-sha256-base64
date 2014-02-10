Tinytest.add('MeteorCryptoHmacSHA256AndBase64 - Simple Test', function (test) {
  var json = '{"handle":"KW9EJhYtS6y48Whm2S6D","expiry":1508141504}',
      policy = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(json));

  test.equal(policy,
      'eyJoYW5kbGUiOiJLVzlFSmhZdFM2eTQ4V2htMlM2RCIsImV4cGlyeSI6MTUwODE0MTUwNH0=',
      'Base64 encoding'
  );

  var json2 = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(policy));

  test.equal(json2,
    json,
    'Base64 decoding'
  );

  var secret = 'Z3IYZSH2UJA7VN3QYFVSVCF7PI',
      hash = CryptoJS.HmacSHA256(policy, secret).toString();

  test.equal(hash,
    '4098f262b9dba23e4766ce127353aaf4f37fde0fd726d164d944e031fd862c18',
    'generate hash using HMAC SHA256'
  );
});

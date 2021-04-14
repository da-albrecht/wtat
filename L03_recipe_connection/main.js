const zipCodes = require('german-zip-codes');
var myDistrict = zipCodes.getDistrictsByZipCode("10319");
console.log(myDistrict);
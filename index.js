const emailExistence = require('email-existence');
const permute = require('email-permutator');
var csvsync = require('csvsync');
var fs = require('fs');

// Reading 'file.csv' from project folder
var csv = fs.readFileSync('file.csv');
var data = csvsync.parse(csv, {
    skipHeader: true,
    returnObject: true,
    headerKeys: ['fName', 'lName', 'domain'],
    delimiter: ','
});

// Creating finalArray to be used later for exporting to CSV
var finalArray = new Array();

// Returning permutated email addresses
data.forEach(element => {
permutatedArray = permute({    
  firstName:element.fName,
  lastName:element.lName,
  nickName:'',
  middleName:'',
  domain1:element.domain,
  domain2:'',
  domain3:'',
});

// Checking the existence of emails
permutatedArray.forEach(row => {
emailExistence.check(row, function(error, response){
    if(response==true){
        console.log('Found an email for '+element.fName+' '+element.lName + ' on ' + element.domain)
        var csvfinaldata = [element.fName,element.lName,element.domain,row];
        finalArray.push(csvfinaldata);

// Write to a CSV file called 'valid_email.csv'
        var csv = csvsync.stringify(finalArray);
        fs.writeFileSync('valid_emails.csv', csv);
            }
        });
    });
});
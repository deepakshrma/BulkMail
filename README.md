BulkMail
========

Send bulk mail using nodemailer and async module
------------

### NodeJS  and MongooseJs module for for demonstrating basic nodemailer js using async module, to send bulk mail in parallel.

Requirement
------------
Prerequisite, nodejs, npm.

Installation
------------
I have use async and nodemailer module for sending mail in parallel. For that you have to get async and nodemailer module using npm.

``` bash
$ npm install 
```
now simply test the application you have simple change the cridentials in the test.js and run the application that you have already downloaded ie.
test.js using node

``` bash
$ node test.js 
```
Output
-------

``` bash
[ { accepted: 
     [ 'deepak.vishwakarma@tothenew.com',
       'vineeta.sharma@tothenew.com' ],
    rejected: [],
    response: '250 2.0.0 OK 1449482258 d6sm33360654pfj.82 - gsmtp',
    envelope: { from: 'deepak.vishwakarma@tothenew.com', to: [Object] },
    messageId: '1449482256819-053e2ac6-56b91d2a-daefae5b@tothenew.com' } ]
```

[NodeJS]: http://nodejs.org


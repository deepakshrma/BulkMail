BulkMail
========

Send bulk mail using nodemailer and async module
==============
============
### NodeJS  and MongooseJs module for for demonstrating basic nodemailer js using async module, to send bulk mail in parallel.

Requirement
------------
Prerequisite, nodejs, npm.

Installation
------------
I have use async and nodemailer module for sending mail in parallel. For that you have to get async and nodemailer module using npm.

``` bash
$ npm install async
$ npm install nodemailer
```
now simply test the application you have simple change the cridentials in the test.js and run the application that you have already downloaded ie.
test.js using node

``` bash
$ node test.js 
```
Output
-------

``` bash
{ type: 'parallel',
  from: 'Fred Foo ✔ <foo@blurdybloop.com>',
  to: 'sandeep.kumar@intelligrape.com',
  subject: 'Hello dude/babe sandeep.kumar',
  text: 'Hello world ✔',
  html: '<b>Hello world ✔</b>',
  transport: 
   { options: 
      { service: 'Gmail',
        auth: [Object],
        maxConnections: 5,
        transport: 'SMTP',
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        requiresAuth: true,
        domains: [Object],
        maxMessages: Infinity },
     transportType: 'SMTP',
     dkimOptions: false,
     transport: { options: [Object], pool: [Object] },
     version: '0.3.32',
     sendMail: [Function] } }
{ type: 'parallel',
  from: 'Fred Foo ✔ <foo@blurdybloop.com>',
  to: 'vineeta.sharma@intelligrape.com',
  subject: 'Hello dude/babe vineeta.sharma',
  text: 'Hello world ✔',
  html: '<b>Hello world ✔</b>',
  transport: 
   { options: 
      { service: 'Gmail',
        auth: [Object],
        maxConnections: 5,
        transport: 'SMTP',
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        requiresAuth: true,
        domains: [Object],
        maxMessages: Infinity },
     transportType: 'SMTP',
     dkimOptions: false,
     transport: { options: [Object], pool: [Object] },
     version: '0.3.32',
     sendMail: [Function] } }
{ type: 'parallel',
  from: 'Fred Foo ✔ <foo@blurdybloop.com>',
  to: 'rakesh.kumar@intelligrape.com',
  subject: 'Hello dude/babe rakesh.kumar',
  text: 'Hello world ✔',
  html: '<b>Hello world ✔</b>',
  transport: 
   { options: 
      { service: 'Gmail',
        auth: [Object],
        maxConnections: 5,
        transport: 'SMTP',
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        requiresAuth: true,
        domains: [Object],
        maxMessages: Infinity },
     transportType: 'SMTP',
     dkimOptions: false,
     transport: { options: [Object], pool: [Object] },
     version: '0.3.32',
     sendMail: [Function] } }

```

[NodeJS]: http://nodejs.org


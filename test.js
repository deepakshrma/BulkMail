/**
 * Created by intelligrape on 2/7/14.
 */
var bulkmail = require("./bulkmail")
var transportinfo = {
    type: "SMTP",
    param:{
        service: "Gmail",
        auth: {
            user: "deepakm.shrma@gmail.com",
            pass: "packet@123xx"
        }
    }
}
var bulk = new bulkmail.SMTP(transportinfo)
// setup e-mail data with unicode symbols
var mailOptions = {
    type:"parallel",
    from: "Fred Foo ✔ <foo@blurdybloop.com>", // sender address
    to: "sandeep.kumar@intelligrape.com,vineeta.sharma@intelligrape.com,rakesh.kumar@intelligrape.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}
bulk.sendBulkMail(mailOptions);

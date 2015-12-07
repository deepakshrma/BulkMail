/**
 * Created by intelligrape on 2/7/14.
 */
var BulkMailer = require("./bulkmailer");
var options = {
    transport: {
        service: 'Gmail',
        auth: {
            user: 'deepak.vishwakarma@tothenew.com',
            pass: 'xxxxx@xxx'
    }
    },
    verbose: true
};
var bulkMailer = new BulkMailer(options)
var mailOptions = {
    from: 'Deepak ✔ <deepak.vishwakarma@tothenew.com>',
    to: 'deepak.vishwakarma@tothenew.com,vineeta.sharma@tothenew.com',
    subject: 'hello',
    text: 'hello world!'
}
bulkMailer.send(mailOptions, true, function (error, result) { // arg1: mailinfo, agr2: parallel mails, arg3: callback
    if (error) {
        console.error(error);
    } else {
        console.info(result);
    }
});

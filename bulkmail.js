/**
 * Created by intelligrape on 2/7/14.
 */
var gnodemailer ;
var async;
function SMTP(transportinfo){
    "use strict";
    var nodemailer = require("nodemailer");
    async = require("async");
    gnodemailer = nodemailer.createTransport(transportinfo.type,transportinfo.param);

}
//Mail.prototype = new
function Mail(info){
    "use strict";
    this.info = info;
}
Mail.prototype.sendmail = function(callback){
    "use strict";
    // send mail with defined transport object
    gnodemailer.sendMail(this.info, callback);
}
SMTP.prototype.getInfo = function(infoTo,from,to,subject){
    var info = {};
    for(var i in infoTo){
        info[i] = infoTo[i];
    }
    if(from)
        info["from"]=from;
    if(to)
        info["to"]=to;
    if(subject)
        info["subject"]=subject;
    return info;
}
SMTP.prototype.sendBulkMail = function (info /* array or object of the information*/){
    "use strict";

    if(info.type == "parallel"){
        var users = info.to.split(",");
        var asyncSends = [];
        for(var index =0 ; index < users.length; index++){

            var infoTo = this.getInfo(info,null,users[index],"Hello dude/babe "+users[index].replace(/(.*)@.*/ig,"$1"))
            asyncSends.push((function(tempinfo){
                    return function(callback){
                        "use strict";
                        // send mail with defined transport object
                        gnodemailer.sendMail(tempinfo, callback);
                        console.log(tempinfo);
                    }
                })(infoTo)
            )
        }
        async.parallel(asyncSends, function(error,res) {
            if (error) {
                throw error; //Or pass it on to an outer callback, log it or whatever suits your needs
            }
            console.log(res);
        });
    }

};
exports.SMTP =  module.export = SMTP;

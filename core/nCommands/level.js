const fs = require("fs");
var gear = require("../gearbox.js");
var paths = require("../paths.js");
var locale = require('../../utils/multilang_b');
var mm = locale.getT();

var cmd = 'level';

var init = function (message, userDB, DB) {

var Author = message.author;
var Target = message.mentions.users.first() || Author;


//-------MAGIC----------------



    message.channel.sendMessage( Target.username+' está no Level **'+Target.mods.level+'**')
}

module.exports = {pub:true,cmd: cmd, perms: 0, init: init, cat: 'misc'};

function whoami(req,res) {
  var software = /\(([^\)]+)\)/.exec(req.get('User-Agent'))[1];
  var language = /([^\,]+)/.exec(req.get('Accept-Language'))[1];
  var who = {
    ip: req.ip,
    language: language,
    software: software
  };
  res.send(JSON.stringify(who));
}
module.exports = whoami;

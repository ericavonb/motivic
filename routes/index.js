
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Inbox' });
};



exports.open = function(req, res){
  res.render('index', { title: 'Open' });
};

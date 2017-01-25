module.exports = function(app, mysqlClient){
  app.get('/',function(req, res, next){
    res.render('index.html');
  });
}

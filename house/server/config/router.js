var auth = require('./auth'),
  users = require('../controllers/users'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  // app.get('/api/courses', courses.getCourses);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.get('/teacher', function(req, res) {
    res.render('teacher', {
      title: 'Techbow'
    });
  });

  app.get('/course', function(req, res) {
    res.render('course', {
      title: 'Techbow'
    });
  });


  app.get('/course/:id', function(req, res) {
    res.render('courseDetail', {
      title: 'Techbow'
    });
  });

  app.get('/student', function(req, res) {
    res.render('student', {
      title: 'Techbow'
    });
  });

  app.get('*', function(req, res) {
    res.render('index', {
      title: 'Techbow'
    });
  });
}
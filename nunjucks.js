// var res = nunjucks.render('foo.html', { username: 'James' });

// nunjucks.render('async.html', function(err, res) {
// });

var nunjucks = require('nunjucks');


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'},
        { name: 'Sara'}
    ]
};
nunjucks.render('views/index.html', locals, function (err, output) {
	console.log('Test')
    console.log(output);
});
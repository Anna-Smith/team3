const url = 'mongodb://Anna.Smith:cr5jhj7hfccd15tn@ds064718.mlab.com:64718/kafkatist';

exports.index = (req, res) => {
    res.render('index', Object.assign({
        message: 'Hello, User!'
    }, req.commonData));
};

exports.error404 = (req, res) => res.sendStatus(404);

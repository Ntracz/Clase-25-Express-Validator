let admins = [
    'Ada',
    'Greta',
    'Vim',
    'Tim'
];

function adminValidator (req, res, next) {
    let user = req.query.user;
    if(user){
        let admin = admins.find(function(elem){
           return user == elem;
        });
        if (admin != undefined){
            next();
        }else{
            res.send(user + ' no sos admin');
        };
    }else{
        res.send('usted no es un usuario :(');
    };
}

module.exports = adminValidator;
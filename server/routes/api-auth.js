module.exports = function(app, path){
    var users = [
        {"username": "qwe", "birthdate": "25/03/2001", "age": 18, "email": "qwe@com.au", "password": "123", "valid": false},
        {"username": "abc", "birthdate": "14/07/2000", "age": 19, "email": "abc@com.au", "password": "abc", "valid": false},
        {"username": "hello", "birthdate": "11/11/1999", "age": 20, "email": "halo@com.au", "password": "hlwd", "valid": false},
    ]
    app.post('/api/auth', function(req, res){
        if(!req.body){
            return res.sendStatus(400)
        }

        var customer = {}
        customer.username = ""
        customer.birthdate = ""
        customer.age = 0
        customer.email = ""
        customer.valid = false
        
        for(i = 0; i <users.length; i++){
            if(req.body.email === users[i].email && req.body.password === users[i].password){
                customer.username = users[i].username
                customer.birthdate = users[i].birthdate
                customer.age = users[i].age
                customer.email = users[i].email
                customer.valid = true
                //res.send(customer);
            }
        }
        res.send(customer);
    })
}
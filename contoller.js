var fs=require('fs');

//callback functions
exports.getAll=function(req, res){
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            res.send(products);
        }
        else{
            res.send("data not available")
        }
    })
};

exports.getById=function(req, res){

    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var product=products.find((p=>(p.id ==producdId)))
            res.send(product);
        }
        else{
            res.send("data not available")
        }
    })

};

exports.insert=function(req, res){
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var newProduct=JSON.parse(req.body);
            products.push(newProduct);

            fs.writeFile(path,products,(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
};

exports.update=function(req, res){
    res.send("existing product updated");
};

exports.delete=function(req, res){
    res.send("product is removed from list");
};


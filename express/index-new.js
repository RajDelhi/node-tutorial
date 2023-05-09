const expressClass      =   require('express')
const basApp            =   expressClass()   

basApp.set("view engine", "ejs");

basApp.get("", (req, res)=>{
    user = {
        'name':'Raj Yadav',
        'desination':'Sr Technical Manager',
        'city' : 'Delhi',
        'skills':['Laravel','Python','C++','PHP','Node','React']
    }
    // res.render("header",'');
    res.render("home",{user});

})

basApp.get("/about", (req, res)=>{
    res.render("about");

})


basApp.listen(2000);
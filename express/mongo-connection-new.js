const dbconnect = require("./dbconnection");

// dbconnect().then((response)=>{
//    // console.log(response);
//     var data = response.find().toArray();
//     data.then((result)=>{
//         console.log(result);
//     })
// })

var find = async ()=>{
     var connection  =  await dbconnect();
     var data = await connection.find().toArray();
     console.log(data)
};

var insertData = async ()=>{
    var connection = await dbconnect();
    var status = await connection.insertMany([
                                        {  Brand: 'OPPO',
                                            Price: '$600',
                                            Model: 'OT 40',
                                            Momory: '625'},

                                         {  Brand: 'Vivo',
                                            Price: '$200',
                                            Model: 'VV 40',
                                            Momory: '1058'}
                                        ]);

    console.log(status);
}


//find();

insertData();
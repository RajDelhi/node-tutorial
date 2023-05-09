var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '10.40.1.31',
  user     : 'rajenderaws1',
  password : 'RajEn@deR@5671',
  database : ''
});
 
connection.connect((error)=>{ // this is for checkind only, you can remove it
  if(error){
    console.log(error)

  }else{
    console.log("Connected");
  }
});
 
connection.query('SELECT * FROM Grading.grade_invoices WHERE invoice_id = 615380', function (error, results, fields) {
  if (error) throw error;
  
  console.log(results);
});
 
connection.end();
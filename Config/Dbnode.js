const  mysql =require('mysql')
const db= mysql.createPool({
    host: 'byizv8c6igtt4tglu5qy-mysql.services.clever-cloud.com',
    port:'3306',
    user: 'u8fgkmjr89kmcgno',
    password: 'U5ZmhGHJBmKHTgSCM4lo',
    database: 'byizv8c6igtt4tglu5qy'
});

 db.getConnection(()=>{
console.log("connected good");
})

module.exports=db;
// const express = require("express");
// const pool =require("../Config/Dbnode");

// class UserModel {
//   static async getUser() {
//     return new Promise (resolve => {
//       pool.query("select * from users" ,[],(error, result) => {
//         if (!error)
//         resolve(result);
//       });
//     }
//   )
  
// }
// static async addnewuser(name , email , password)
// {
//   return new Promise(resolve =>{
//     pool.query("insert into users (name,email,password) values (?,?,?)",[name,email,password],(err,result)=>{
//       if(!err)resolve(true)
//       else{
//     console.log("error",err);
//     resolve(false)
//     }
//     })
//   })

// }

// static async deleteuser(id){
//   return new Promise(resolve =>{
//     pool.query("delete from users where id=?",[id],(errore , result)=>{
//       if(errore){
//         resolve(false)
//       }

//       else{
//       resolve(true)
//       }
//     })
//   })
// }

// static async editeuser(id , name , email , password){
//   return new Promise(resolve => {
//   pool.query("update users set name=? , email=? , password=? where id=?",[name , email , password , id],(err , res) =>{
//       if(!err)resolve(res)
//       else resolve(err)
//     })
//   })
// }

// }
// module.exports=UserModel;






const pool = require("../Config/Dbnode");

class UserModel {
  static async getUser() {
      return new Promise (resolve => {
        pool.query("select * from dec" ,[],(error, result) => {
          if (!error)
          resolve(result);
        });
      }
    )
}
    static async addNewUser(name_ar , details_ar, name_en, details_en) {
        return new Promise((resolve, reject) => {
            pool.query(
                "INSERT INTO dec (name_ar , details_ar, name_en, details_en) VALUES (?, ?, ? ,?)",
                [name_ar , details_ar, name_en, details_en],
                (error, result) => {
                    if (error) {
                        console.error("Error adding info to database:", error);
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
}
module.exports = UserModel;

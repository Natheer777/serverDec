// const userModel =require('../Models/User')

// class UserController {
//     static async  getallusers(req , res){
//        var result = await userModel.getUser()
    
//        if (result) 
//         res.send(result)
    
//     }

//     static async adduser(req , res){
//         var name = req.body.name;
//         var email = req.body.email;
//         var password = req.body.password;
//         var answer = await userModel.addnewuser(name,email,password)
    
//         if(answer === true){

//             res.send("add successfully")
//         }

//         else{
//             res.send("add failed")
//         } 
            
    
//     }

//     static async deleteuser(req , res){
//             const id = req.body.id

//             if(id){
//                 var resultId = await userModel.deleteuser(id);
//                 if (resultId){
//                     res.send("delete done")
//                 }else{
//                     res.send("delete field")
//                 }
//             }

//         }

//         static async editeuser(req , res){

//                 const id = req.body.id

//                 const newName = req.body.name
//                 const newEmail = req.body.email
//                 const newPassword = req.body.password


//                 var editeAnswer = await userModel.editeuser(id , newName , newEmail , newPassword)

//                 if(editeAnswer){
//                     res.send("edite done")
//                 }else{
//                     res.send("edite filed")
//                 }
//         }

// }




// module.exports=UserController;





const UserModel =require('../Models/User');

class UserController {
    static async  getallusers(req , res){
               var result = await UserModel.getUser()
            
               if (result) 
                res.send(result)
            
            }
    static async addUser(name_ar , details_ar, name_en, details_en) {
        try {
            const result = await UserModel.addNewUser(name_ar , details_ar, name_en, details_en);
            return result;
        } catch (error) {
            throw new Error("فشلت عملية إضافة المستخدم إلى قاعدة البيانات.");
        }
 
    }
        
}


module.exports = UserController;

























// const userModel = require('../Models/User');

// class UserController {
//   static async getAllUsers(req, res) {
//     try {
//       // Call the userModel method to retrieve all users
//       const result = await userModel.getUsers();

//       // Check if result is not empty (assuming result is an array of users)
//       if (result && result.length > 0) {
//         // Send the retrieved users as a response
//         res.send(result);
//       } else {
//         // If no users found, send an appropriate message
//         res.status(404).send({ message: 'No users found' });
//       }
//     } catch (error) {
//       // Handle any errors that occurred during the retrieval process
//       console.error('Error fetching users:', error);
//       res.status(500).send({ message: 'Internal Server Error' });
//     }
//   }
// }

// module.exports = UserController;

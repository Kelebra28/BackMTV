'use strict';
const bcrypt =  require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: {
      type:DataTypes.STRING,
           allowNull:false
          },
      phoneNumber: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          not:['[a-z], i']
        }
      },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true,
        notEmpty:{
          args:true,
          msg:"Email  must be provided"
        }
      }
    },
    roll:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        not: [i],
        notEmpty:{
          args: true,
          msg:"Your password isn't efficient"
        }
      }
    }
  }, {});

  let cryptPassword = (password) => {
    return new Promise((resolve,reject) => {
      bcrypt.genSalt(10,(err,salt) =>{
        if(err) reject(err)
        bcrypt.hash(password,salt,(err,new_hash)=> {
            if(err)reject(err)
            resolve(new_hash)
        })
      })
    })
  }

  Users.beforeCreate((user,options) => {

    return cryptPassword(user.password).then((new_hash) => {
      user.password = new_hash
    }).catch(e => console.log(e))

  })


  Users.prototype.comparePassword = function (testPassword) {
    let password =  this.password
    return new Promise(function(resolve,reject){
        bcrypt.compare(testPassword,password,function(err,result){
          if(err) reject(err)
          resolve(result)
        
        })
    })
  }

  Users.associate = function(models) {
    Users.hasOne(models.Seller,{foreignKey:"userId"});
    Users.hasOne(models.Client,{foreignKey:"userId"});
    Users.hasOne(models.Collecto,{foreignKey:"userId"});
  };
  return Users;
};
var connection=require('./connectionDb');

var getRoom=function(req,res){
  let getSql="SELECT * FROM room";
  connection.query(getSql,function(err,result){
    if(err){
      console.log(err)
      res.status(210).json({code:210,msg:'获取数据出错'})
    }else{
      res.status(200).json({code:200,msg:result})
    }
  })

}
module.exports=getRoom;
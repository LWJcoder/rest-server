# rest-server
by node.js-mongodb(mongoose 操作mongodb)-express 

dishRouter,leaderRouter, promoRouter

对应关系
Router        mongodb
  get         something.find({},functionerr,st){})
  post         something.create(req.body, function(){})
  delete        something.findByIdAndRemove({},function(err, resp){})
  
  {}代表全部
  
  res.json(resp) //将resp转为json格式

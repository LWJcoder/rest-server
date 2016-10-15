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


----------------------------------------------------
dishes test(use tool: postman):
  ##address     http://localhost:3002/dishes/580198f8208d091a1cbe7d82/comments/
##method: Post
##body(raw, json)
 {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        }
##result: {
  "_id": "580198f8208d091a1cbe7d82",
  "name": "Uthapizza",
  "image": "images/uthapizza.png",
  "category": "mains",
  "price": 499,
  "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  "__v": 2,
  "comments": [
    {
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "_id": "580199e0208d091a1cbe7d83"
    },
    {
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "_id": "58019c06208d091a1cbe7d84"
    }
  ],
  "label": "new"
}


----------------------------------------------------

  ##address                                                                                          
  
  http://localhost:3002/dishes/580198f8208d091a1cbe7d82/comments/
http://localhost:3002/dishes/580198f8208d091a1cbe7d82/comments/580199e0208d091a1cbe7d83       

##method: GET

## result(response)
{
  "rating": 5,
  "comment": "Imagine all the eatables, living in conFusion!",
  "author": "John Lemon",
  "_id": "580199e0208d091a1cbe7d83"
}

----------------------------------------------------
Update the info
  ##address                                                                                          
http://localhost:3002/dishes/580198f8208d091a1cbe7d82/comments/580199e0208d091a1cbe7d83   

##method: PUT

##body:
{rating: 5}



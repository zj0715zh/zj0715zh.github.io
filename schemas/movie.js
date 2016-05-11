var mongoose = require('mongoose')
var MovieSchema = new mongoose.Schema({
	moviename:{type:String,default:"超人"},
	movieid:{type:Number,default:1},
	movieimg:{type:String,default:""},
	moviedate:{
		createtime:{type:Date,default:Date.now()},
		updatetime:{type:Date,default:Date.now()}
	}
})

MovieSchema.pre("save",function(next){
	if(this.isNew){
		this.moviedate.createtime =this.moviedate.updatetime = Date.now() 
	}else{
		this.moviedate.updatetime = Date.now()
	}
	next()
})

MovieSchema.statics = {
	findAll:function(cb){
		return this.find({}).sort('moviedate.updatetime')
		exec(cb)
	},
	findbyid:function(_id,cb){
		return this.findOne({id:id})
		exec(cb)
	}
}

module.exports = MovieSchema
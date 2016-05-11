var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

mongoose.connect('mongodb://localhost/imooc')

app.set('views','./views')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))//接受form表单提交的数据
app.use(bodyParser.json())//接受json数据格式提交的数据
app.use(express.static(path.join(__dirname,'static')))
app.listen(port)

console.log("node start success")
var movie = new Movie({
	moviename:"zoujie",
	movieid:1212,
	movieimg:"dfsfds",
})
movie.save(function(err) {
    if (err) {
        console.log('保存失败')
        return;
    }
    console.log('保存成功');
});
Movie.find({moviename:"zoujie"},{},{},function(error,res){
	if(error){
		console.log(error)
	}else{
		console.log(res)
	}
})
app.get('/index',function(req,res){
	Movie.findAll(function(error,res){
		if(error){
			console.log(error)
		}else{
			console.log(res)
		}
	})
	res.render('index',{
		title:'邹杰影视首页',
		movies:[{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
				{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},{
					moviename:'国际大作变形金刚',
					movieid:22,
					movieimg:'http://www.hhxyedu.com/zysz/UploadFiles_7063/201407/2014072210203867.jpg'
				},
		]
	})
})
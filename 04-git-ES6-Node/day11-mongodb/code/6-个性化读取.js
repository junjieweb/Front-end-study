const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/data', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    //创建结构对象
    const SongSchema = new Schema({
        language: String,
        hot: Number,
        title: String,
        author: String,
        duration: Number
    });
    //创建模型对象
    const SongModel = mongoose.model('songs', SongSchema);

    //读取数据  {} 表示不加条件
    // SongModel.find({}, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // })

    //字段（属性）筛选
    // SongModel.find().select({author: 1, title: 1, _id: 0}).exec((err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    //数据排序  1 为升序 -1 为降序
    // SongModel.find().sort({hot: -1}).select({hot: 1, title: 1}).exec((err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    //数据截取  降序读取10条数据
    //skip 跳过 n 条
    //limit 取出 n 条
    SongModel.find()
        .select({hot: 1, title: 1, _id: 0})
        .sort({hot: -1})
        .skip(0).limit(10)
        .exec((err, data) => {
            if (err) throw err;
            console.log(data);
        });
});
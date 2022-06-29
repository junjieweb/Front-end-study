const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });

    //创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);

    //读取数据
    // StarModel.find({name: '马保国'}, (err, data) => {
    //     if (err) throw err;
    //     //输出读取出来的数据
    //     console.log(data);
    // });

    //读取单条数据
    // StarModel.findOne({name: 'kun'}, (err, data) => {
    //     if (err) throw err;
    //     //输出读取出来的数据
    //     console.log(data);
    // });

    //根据id获取数据
    StarModel.findById('61e2da2f1b74d538782e791c', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

});
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

    //更新
    // StarModel.updateOne({name: '菜鸡'}, {name: 'kun'}, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    StarModel.updateMany({name: '菜鸡'}, {name: 'kun'}, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
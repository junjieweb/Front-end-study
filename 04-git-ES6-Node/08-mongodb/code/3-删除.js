const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    //结构对象
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });
    //创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);
    //文档删除
    // StarModel.deleteOne({name: '马保国'}, (err, data) => {
    //     if (err) throw err;
    //     //根据删除数据的数量 判断删除是否成功
    //     if (data.deletedCount >= 1) {
    //         console.log('删除成功');
    //     } else {
    //         console.log('删除失败');
    //     }
    //     console.log(data);
    //     //关闭连接
    //     mongoose.connection.close();
    // });

    //批量删除
    StarModel.deleteMany({name: '马老师'}, (err, data) => {
        console.log(data);
    })
});

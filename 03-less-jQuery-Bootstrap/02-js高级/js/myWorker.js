function fn(num) {
    let a = 0;
    //num就是传入的循环次数
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            a++;
        }
    }
    return a;
}

//只要是主线程给你发送了消息 onmessage 对应的回调函数自动就会执行
self.onmessage = function (event) {
    //event身上有一个属性，叫做data，用来接收主线程传递过来的消息
    let result = fn(event.data);
    //将子线程处理好的内容再传回给主线程操作
    self.postMessage(result);
}

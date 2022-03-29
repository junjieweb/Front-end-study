//利用mockjs提供mock接口
import Mock from "mockjs"
import recommends from "./recommends.json"
import floors from "./floors.json"

//提供今日接口
Mock.mock('/mock/recommends', {code: 200, data: recommends})

//提供楼层接口
Mock.mock('/mock/floors', {code: 200, data: floors})

// console.log('MockServer')
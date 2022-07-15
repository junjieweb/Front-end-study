import {ADD_PERSON} from "../constant";

//创建加一个人的action（同步action）
export const createAddPersonAction = personObj => ({type: ADD_PERSON, data: personObj})

import mockjs from "mockjs";
//webpack默认暴露图片，JSON数据
import banner from './banner'
import floor from './floor'

mockjs.mock("/mock/banner", { code: 200, data: banner })
mockjs.mock("/mock/floor", { code: 200, data: floor })


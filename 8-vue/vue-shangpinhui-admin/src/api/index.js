// 将四个模块请求的接口函数统一暴露
import * as tradeMark from './product/tradeMark'
import * as attr from './product/attr'
import * as sku from './product/sku'
import * as spu from './product/spu'

import role from '@/api/acl/role'
import * as user from '@/api/acl/user'
import permission from '@/api/acl/permission'

// 对外暴露
export default {
  tradeMark,
  attr,
  sku,
  spu,
  role,
  user,
  permission
}

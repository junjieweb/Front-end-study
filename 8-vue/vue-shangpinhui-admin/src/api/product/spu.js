import request from '@/utils/request'
/**
 * 获取SPU列表数据的接口
 * GET /admin/product/{page}/{limit}
 * page limit category3Id
 */
export const reqSpuList = (page, limit, category3Id) =>
  request({
    url: `/admin/product/${page}/${limit}`,
    method: 'get',
    params: { category3Id }
  })

/**
 * 获取Spu信息
 * GET /admin/product/getSpuById/{spuId}
 */
export const reqSpu = (spuId) =>
  request({ url: `/admin/product/getSpuById/${spuId}`, method: 'get' })

/**
 * 获取品牌的信息
 * GET /admin/product/baseTrademark/getTrademarkList
 */
export const reqTradeMarkList = () =>
  request({ url: `/admin/product/baseTrademark/getTrademarkList`, method: 'get' })

/**
 * 获取Spu图片的接口
 * GET /admin/product/spuImageList/{spuId}
 */
export const reqSpuImageList = (spuId) =>
  request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })

/**
 * 获取平台全部销售属性----整个平台销售属性一共三个
 * GET /admin/product/baseSaleAttrList
 */
export const reqBaseSaleAttrList = () =>
  request({ url: '/admin/product/baseSaleAttrList', method: 'get' })

import request from "@/utils/request";
/**
 * 获取SPU列表数据的接口
 * GET /admin/product/{page}/{limit}
 * page limit category3Id
 */
export const reqSpuList = (page, limit, category3Id) =>
  request({
    url: `/admin/product/${page}/${limit}`,
    method: "get",
    params: { category3Id },
  });

/**
 * 获取Spu信息
 * GET /admin/product/getSpuById/{spuId}
 */
export const reqSpu = (spuId) =>
  request({ url: `/admin/product/getSpuById/${spuId}`, method: "get" });

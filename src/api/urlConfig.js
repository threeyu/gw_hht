const serverRoot = "http://service.alilo.com.cn";
const cloudRoot = "http://cloud.alilo.com.cn";
const resourceRoot = "http://resource.alilo.com.cn";

// 维修查询
export const maintainList = cloudRoot + "/customer/servicing/getQueryData";
// 经销商查询
export const dealerList = serverRoot + "/gw/service/agency";
// 送检提交、验证码、查询
export const sendTermSubmit = serverRoot + "/gwcs/order/customerApplication";
export const sendTermCode = serverRoot + "/gwcs/order/getPhoneCode";
export const sendTermList = serverRoot + "/gwcs/order/getExpress";
// 问题反馈
export const feedbackSubmit = serverRoot + "/gw/advice/addAdvice";
// 音频专辑查询
export const audioList = serverRoot + "/gw/resource/special";
// 视频专辑查询
export const videoList = serverRoot + "/gw/resource/animeInfo";
// 音频专辑详情
export const audioAlbumList = serverRoot + "/gw/resource/music";
export const audioAlbumInfo = cloudRoot + "/baby/api/t/external/getSpecialInfo";
// 音频单曲详情
export const audioSingleInfo = serverRoot + "/gw/resource/single";
// 产品查询
export const productList = serverRoot + "/gw/product/products";
export const productInfo = serverRoot + "/gw/product/productinfo";
// 产品对比
export const productCompList = serverRoot + "/gw/product/compare";
// 产品资源下载
export const resourceDownload = resourceRoot + "/res/gw/";
// 精品推荐、原创视频、哄睡专区、品牌专区
export const recommendList = cloudRoot + "/baby/api/t32/recommendSpecial";
export const originalList = cloudRoot + "/baby/api/t32/videoAlbumList";
export const sleepyList = cloudRoot + "/baby/api/t32/sleepZone";
export const brandList = cloudRoot + "/baby/api/t32/characterTraining";
// 搜索
export const resultList = serverRoot + "/gw/search/byName";
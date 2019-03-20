import * as url from './urlConfig.js'
import axios from 'axios'
import qs from 'qs'

// 维修查询
export const maintainApi = {
  getList(param) {
    return axios.get(url.maintainList, param).then((res) => {
      return res.data;
    })
  }
}
// 经销商查询
export const dealerApi = {
  getList(param) {
    return axios.post(url.dealerList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  }
}
// 送检查询
export const sendTermApi = {
  getList() {
    return axios.post(url.sendTermList).then((res) => {
      return res.data;
    })
  },

  getCode(param) {
    return axios.post(url.sendTermCode, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },

  submit(param) {
    return axios.post(url.sendTermSubmit, qs.stringify(param)).then((res) => {
      return res.data;
    })
  }
}
// 问题反馈
export const feedbackApi = {
  submit(param) {
    return axios.post(url.feedbackSubmit, qs.stringify(param)).then((res) => {
      return res.data;
    })
  }
}

// 资源列表
export const contentApi = {
  // 儿歌
  getAudioByTxt(param) {
    return axios.post(url.audioList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 儿歌专辑列表
  getAudioAlbumByName(param) {
    return axios.post(url.audioAlbumList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 儿歌专辑信息
  getAudioInfoById(param) {
    return axios.post(url.audioAlbumInfo, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 儿歌单曲信息
  getAudioSingleInfoById(param) {
    return axios.post(url.audioSingleInfo, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 动画
  getVideoById(param) {
    return axios.post(url.videoList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 精品推荐、原创视频、哄睡专区、品牌专区
  getRecommendList() {
    return axios.get(url.recommendList).then((res) => {
      return res.data;
    })
  },
  getOriginalList() {
    return axios.get(url.originalList).then((res) => {
      return res.data;
    })
  },
  getSleepyList() {
    return axios.get(url.sleepyList).then((res) => {
      return res.data;
    })
  },
  getBrandList() {
    return axios.get(url.brandList).then((res) => {
      return res.data;
    })
  },
  // 性格养成、国学熏陶、财商启蒙、情商培养
  getCharacterList() {
    return axios.get(url.characterList).then((res) => {
      return res.data;
    })
  },
  getNationList() {
    return axios.get(url.nationList).then((res) => {
      return res.data;
    })
  },
  getWealthList() {
    return axios.get(url.wealthList).then((res) => {
      return res.data;
    })
  },
  getEmotionList() {
    return axios.get(url.emotionList).then((res) => {
      return res.data;
    })
  },
  // 下载音频资源
  getAudioResource(obj) {
    let downloadUrl = url.audioDownload + obj.encodeName + '?appKey=A01A6B3988EAC607&type=gw_audio';
    let config = {
      responseType: 'arraybuffer',
      onDownloadProgress: obj.onProgressCallback
    };
    return axios.get(downloadUrl, config).then((res) => {
      return res.data;
    })
  }
}

// 产品列表
export const productApi = {
  // 获取全部产品
  getAllProduct() {
    return axios.post(url.productList).then((res) => {
      return res.data;
    })
  },
  // 获取某品牌的全部产品
  getProductByBrand(param) {
    return axios.post(url.productList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 获取某品牌下的某系列的全部产品
  getProductByType(param) {
    return axios.post(url.productList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 获取产品详情
  getProductDetailByName(param) {
    return axios.post(url.productInfo, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 获取产品对比详情
  getCompListByName(param) {
    return axios.post(url.productCompList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  },
  // 专属资源下载
  getResourceByName(param) {
    return url.resourceDownload + param;
  }
}

// 搜索
export const searchApi = {
  // 搜索专辑、单曲、动画
  getAllByName(param) {
    return axios.post(url.resultList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  }
}

// 首页
export const homeApi = {
  // 获取全部品牌咨询
  getNewsList(param) {
    return axios.post(url.brandNewsList, qs.stringify(param)).then((res) => {
      return res.data;
    })
  }
}
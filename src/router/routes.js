import NotFound from '@/components/error/notFound.vue'
import MainContainer from '@/components/index.vue'


/***************** 首页 ****************************/
import Home from '@/components/home/index.vue'

/***************** 产品 ****************************/
import Products from '@/components/products/index.vue'
import ProductCompared from '@/components/products/comparedPage.vue'
import ProductDownload from '@/components/products/downloadPage.vue'
import ProductReport from '@/components/products/reportPage.vue'
import ProductDetail from '@/components/products/detailPage.vue'


/***************** 内容 ****************************/
import Content from '@/components/content/index.vue'
import ContentDetail from '@/components/content/contentDetail.vue'
import VideoPage from '@/components/content/videoPage.vue'

/***************** 品牌 ****************************/
import Brand from '@/components/brand/index.vue'

/***************** 售后 ****************************/
import Service from '@/components/service/index.vue'
import SelfHelp from '@/components/service/selfHelp.vue'
import MaintainCheck from '@/components/service/maintainCheck.vue'
import DealerCheck from '@/components/service/dealerCheck.vue'
import FakeCheck from '@/components/service/fakeCheck.vue'
import NetworkCheck from '@/components/service/networkCheck.vue'
import SaleTerm from '@/components/service/saleTerm.vue'
import SendTerm from '@/components/service/SendTerm.vue'
import CheckTerm from '@/components/service/CheckTerm.vue'

/***************** 其他 ****************************/
import ContactPage from '@/components/others/contactPage.vue'         // 联系我们
import CopyrightPage from '@/components/others/copyrightPage.vue'     // 版权声明
import FeedbackPage from '@/components/others/feedbackPage.vue'       // 问题反馈
import BrandinfoPage from '@/components/others/brandinfoPage.vue'     // 品牌咨询
import SearchPage from '@/components/common/searchPage.vue'           // 搜索结果

export default [
  {
    path: '/',
    redirect: '/pages'
  },
  {
    path: '/pages',
    redirect: '/pages/home',
    component: MainContainer,
    children: [
      // ---------------------首页管理---------------------
      {
        name: 'home',
        path: '/pages/home', // 首页
        component: Home
      },

      // ---------------------产品管理---------------------
      {
        name: 'products',
        path: '/pages/products', // 产品
        component: Products
      },
      {
        name: 'productCompared',
        path: '/pages/products/compared', // 产品对比
        component: ProductCompared
      },
      {
        name: 'productDetail',
        path: '/pages/products/detail', // 产品详情
        component: ProductDetail
      },
      {
        name: 'productReport',
        path: '/pages/products/report', // 试用报告
        component: ProductReport
      },
      {
        name: 'productDownload',
        path: '/pages/products/download', // 专属资源下载
        component: ProductDownload
      },

      // ---------------------内容管理---------------------
      {
        name: 'content',
        path: '/pages/content', // 内容
        component: Content
      },
      {
        name: 'contentDetail',
        path: '/pages/content/contentDetail', // 内容详情
        component: ContentDetail
      },
      {
        name: 'videoPage',
        path: '/pages/content/videoPage', // 视频播放
        component: VideoPage
      },

      // ---------------------品牌管理---------------------
      {
        name: 'brand',
        path: '/pages/brand', // 品牌
        component: Brand
      },

      // ---------------------售后管理---------------------
      {
        name: 'service',
        path: '/pages/service', // 售后
        component: Service,
      },
      {
        name: 'selfHelp',
        path: '/pages/service/selfHelp', // 自助查询
        component: SelfHelp
      },
      {
        name: 'maintainCheck',
        path: '/pages/service/maintainCheck', // 维修查询
        component: MaintainCheck
      },
      {
        name: 'dealerCheck',
        path: '/pages/service/dealerCheck', // 经销商查询
        component: DealerCheck
      },
      {
        name: 'fakeCheck',
        path: '/pages/service/fakeCheck', // 防伪鉴别
        component: FakeCheck
      },
      {
        name: 'networkCheck',
        path: '/pages/service/networkCheck', // 网点查询
        component: NetworkCheck
      },
      {
        name: 'saleTerm',
        path: '/pages/service/selfHelp/saleTerm', // 售后条款
        component: SaleTerm
      },
      {
        name: 'sendTerm',
        path: '/pages/service/selfHelp/saleTerm/sendTerm', // 寄件维修
        component: SendTerm
      },
      {
        name: 'checkTerm',
        path: '/pages/service/selfHelp/saleTerm/checkTerm', // 送检维修
        component: CheckTerm
      },

      // ---------------------其他页管理---------------------
      {
        name: 'contact',
        path: '/pages/others/contact', // 联系我们
        component: ContactPage
      },
      {
        name: 'copyright',
        path: '/pages/others/copyright', // 版权声明
        component: CopyrightPage
      },
      {
        name: 'feedback',
        path: '/pages/others/feedback', // 问题反馈
        component: FeedbackPage
      },
      {
        name: 'brandinfo',
        path: '/pages/others/brandinfo', // 品牌资讯
        component: BrandinfoPage
      },
      {
        name: 'searchpage',
        path: '/pages/others/search', // 搜索结果
        component: SearchPage
      }
    ]
  },
  { // 404页面：必须位于最后，否则其它的路由地址都会使用 NotFound 组件
    path: '*',
    component: NotFound
  }
]

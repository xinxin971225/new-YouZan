import Mock from 'mockjs'
let Random = Mock.Random

let mockData = {
    listsdata: function listsdata() {
        return Mock.mock({
            'Lists|6': [{
                id: Random.int(10000, 100000),
                img: Mock.mock('@img(178x178,@color)'),
                name: Random.ctitle(3, 5),
                price: Random.float(60, 100, 2, 2)
            }]
        })
    },
    banLists: Mock.mock({
        Lists: [{
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        }, {
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        }, {
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        }]
    }),
    rankData: Mock.mock({
        hotGoods: [{
            id: Random.increment(),
            img: Mock.mock('@img(90x90,@color)'),
            name: Random.ctitle(3, 5),
            price: Random.float(60, 100, 2, 2),
            recommend: Random.natural(1000, 10000)
        }, {
            id: Random.increment(),
            img: Mock.mock('@img(90x90,@color)'),
            name: Random.ctitle(3, 5),
            price: Random.float(60, 100, 2, 2),
            recommend: Random.natural(1000, 10000)
        }, {
            id: Random.increment(),
            img: Mock.mock('@img(90x90,@color)'),
            name: Random.ctitle(3, 5),
            price: Random.float(60, 100, 2, 2),
            recommend: Random.natural(1000, 10000)
        }],
        'hotKeywords|9': [
            Random.pick(['化妆水', '连衣裙', '凉鞋女', '面膜', '防晒', '蓝牙音箱', '小白鞋', '裤子', '衬衫'])
        ],
        hotShops: [{
            clickUrl: Random.url(),
            follows: Random.natural(500000, 1000000),
            imgs: [Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)')],
            name: Random.ctitle(4)
        }, {
            clickUrl: Random.url(),
            follows: Random.natural(500000, 1000000),
            imgs: [Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)')],
            name: Random.ctitle(4)
        }, {
            clickUrl: Random.url(),
            follows: Random.natural(500000, 1000000),
            imgs: [Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)'), Mock.mock('@img(68x68,@color)')],
            name: Random.ctitle(4)
        }]
    }),
    topLists: Mock.mock([{
        id: Random.natural(100, 1000),
        name: Random.capitalize('综合排行'),
    }, {
        id: Random.natural(100, 1000),
        name: Random.capitalize('食品酒水'),
    }, {
        id: Random.natural(100, 1000),
        name: Random.capitalize('女士穿搭'),
    }, {
        id: Random.natural(100, 1000),
        name: Random.capitalize('男士穿搭'),
    }]),
    subData: function () {
        return Mock.mock({
            'brandList|4': [{
                id: Random.natural(10, 100), img: Mock.mock('@img(60x60,@color)'), name: Random.ctitle(4)
            }],
            'categoryList|5': [{
                id: Random.natural(10, 100), img: Mock.mock('@img(60x60,@color)'), name: Random.ctitle(2)
            }]
        })
    },
    searchList: Mock.mock([{
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }, {
        id: Random.natural(10000, 100000), img: Mock.mock('@img(320x320,@color)'), isOut: Random.boolean(), isPostage: Random.boolean(), name: Random.title(10), price: Random.float(60, 100, 2, 2)
    }]),
    goodsData: Mock.mock({
        details: {
            description: '<div class=\"js-components-container components-container\"> <div class=\"custom-richtext js-lazy-container js-view-image-list\"> <p><img data-origin-width=\"720\" data-origin-height=\"713\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FhU7lMPonHtR8qP4zP4aIKRVkObr.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"494\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvYqk840X0ubXwFE6Nh0unihqIKm.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"916\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FvIfNYewmohf3b3V2yA_hr6whV-A.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"656\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FlYJPxbAgmkKjWtvLxwqjUMJHUG3.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"513\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" data-src=\"https://img.yzcdn.cn/upload_files/2017/05/15/FmpaiyW8GbpV2I2QKwm7stoRQkOJ.jpg!730x0.jpg\"> <img data-origin-width=\"720\" data-origin-height=\"691\" class=\"js-richtext-img-lazy js-view-image-item\" src=\"https://img.yzcdn.cn/upload_files/2017/05/15/Fs5rqsKzMe7qIHhuQAqyM1lcjmfB.jpg?imageView2/2/w/730/h/0/q/75/format/webp\" ',
            identification: ["企业认证", "担保交易"],
            imgs: [Mock.mock('@img(375x375,@color)'), Mock.mock('@img(375x375,@color)'), Mock.mock('@img(375x375,@color)')],
            originalPrice: Random.float(100, 500, 2, 2),
            postage: "免运费",
            price: Random.float(50, 100, 2, 2),
            remain: Random.natural(100, 300),
            sales: Random.natural(500, 1000),
            skuList: [{ lists: ["一个", "两个"], title: "净含量" }, { lists: ["一个", "两个"], title: "个数" }],
            storeName: "寻找田野",
            title: "寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤"

        },
        dealLists: Mock.mock([{
            buyer: Random.cname(),
            num: Random.natural(1, 10),
            time: Random.time()
        }, {
            buyer: Random.cname(),
            num: Random.natural(1, 10),
            time: Random.time()
        }, {
            buyer: Random.cname(),
            num: Random.natural(1, 10),
            time: Random.time()
        }, {
            buyer: Random.cname(),
            num: Random.natural(1, 10),
            time: Random.time()
        }])
    }),
    cartData: Mock.mock([{
        shopTitle: Random.ctitle(4),
        shopId: Random.natural(10000, 100000),
        'goodsList|2-3': [{
            id: Random.natural(10000, 100000),
            img: Mock.mock('@img(90x90,@color)'),
            number: Random.natural(1, 10),
            price: Random.float(10, 100, 2, 2),
            sku: Random.cword(3) + ',' + Random.cword(3) + ',' + Random.cword(3),
            title: Random.ctitle(4) + '' + Random.ctitle(4) + '' + Random.ctitle(4)
        }]
    }, {
        shopTitle: Random.ctitle(4),
        shopId: Random.natural(10000, 100000),
        'goodsList|2-3': [{
            id: Random.natural(10000, 100000),
            img: Mock.mock('@img(90x90,@color)'),
            number: Random.natural(1, 10),
            price: Random.float(10, 100, 2, 2),
            sku: Random.cword(3) + ',' + Random.cword(3) + ',' + Random.cword(3),
            title: Random.ctitle(4) + '' + Random.ctitle(4) + '' + Random.ctitle(4)
        }]
    }, {
        shopTitle: Random.ctitle(4),
        shopId: Random.natural(10000, 100000),
        'goodsList|2-3': [{
            id: Random.natural(10000, 100000),
            img: Mock.mock('@img(90x90,@color)'),
            number: Random.natural(1, 10),
            price: Random.float(10, 100, 2, 2),
            sku: Random.cword(3) + ',' + Random.cword(3) + ',' + Random.cword(3),
            title: Random.ctitle(4) + '' + Random.ctitle(4) + '' + Random.ctitle(4)
        }]
    }]),
    addressData: Mock.mock([{
        address: Random.ctitle(3),
        cityName: Random.city(),
        cityValue: Random.zip(),
        districtName: Random.county(),
        districtValue: Random.zip(),
        id: Random.natural(10000, 100000),
        isDefault: Random.boolean(),
        name: Random.cname(),
        provinceName: Random.province(),
        provinceValue: Random.zip(),
        tel: 88888866
    }, {
        address: Random.ctitle(3),
        cityName: Random.city(),
        cityValue: Random.zip(),
        districtName: Random.county(),
        districtValue: Random.zip(),
        id: Random.natural(10000, 100000),
        isDefault: Random.boolean(),
        name: Random.cname(),
        provinceName: Random.province(),
        provinceValue: Random.zip(),
        tel: 88888866
    }, {
        address: Random.ctitle(3),
        cityName: Random.city(),
        cityValue: Random.zip(),
        districtName: Random.county(),
        districtValue: Random.zip(),
        id: Random.natural(10000, 100000),
        isDefault: Random.boolean(),
        name: Random.cname(),
        provinceName: Random.province(),
        provinceValue: Random.zip(),
        tel: 88888866
    }, {
        address: Random.ctitle(3),
        cityName: Random.city(),
        cityValue: Random.zip(),
        districtName: Random.county(),
        districtValue: Random.zip(),
        id: Random.natural(10000, 100000),
        isDefault: Random.boolean(),
        name: Random.cname(),
        provinceName: Random.province(),
        provinceValue: Random.zip(),
        tel: 88888866
    }])
}

export default mockData
let url = {
    hotLists:'/data/36912',
    banner:'/data/36913',
    topList:'/data/37482',
    subList:'/data/37542',
    rank:'/data/37483',
    searchList:'/7058/search/list',
    details:'/data/38227',
    deal:'/data/38357',
    addCart:'/data/38514',
    cartLists: '/data/38519',
    cartReduce: '/data/38588',
    cartRemove: '/data/38591',
    cartMremove:'/data/38592',
    cartUpdate: '/data/38518',
    addressLists: '/data/1593994',
    addressAdd: '/data/1594026',
    addressRemove: '/data/1594030',
    addressUpdate: '/data/1594032',
    addressSetDefault: '/data/1594033'
}

 

//开发环境和真实环境的切换
// let host = ''
let host = 'http://rap2.taobao.org:38080/app/mock'

for(let key in url ){
    if(url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url
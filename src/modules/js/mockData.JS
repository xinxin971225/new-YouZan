import Mock from 'mockjs'
let Random = Mock.Random

let mockData = {
    listsdata : function listsdata (){ return Mock.mock({
        'Lists|6' :[{
            id: Random.int(10000,100000),
            img: Mock.mock('@img(178x178,@color)'),
            name: Random.ctitle(3, 5),
            price:Random.float(60, 100, 2,2)
        }]
      })},
    banLists: Mock.mock({
        Lists:[{
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        },{
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        },{
            clickUrl: Random.url(),
            img: Mock.mock('@img(375x180,@color)')
        }]
    }),
}

export default mockData
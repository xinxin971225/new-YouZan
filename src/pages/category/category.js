import 'css/common.css'
import './category.css'

import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import mockData from 'js/mockData.js'

// import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'
console.log(mockData)

new Vue({
    el:'#app',
    data:{
        topLists:null,
        topIndex:0,
        subData:null,
        rankData:null
    },
    created(){
        this.getTopList()
        this.getSubList(0)
    },
    methods:{
        getTopList(){
                this.topLists = mockData.topLists

        },
        getSubList(index,id){
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                this.subData = mockData.subData()
            }
        },
        getRank(){
                this.rankData = mockData.rankData
        },
        toSearch(list){
            location.href = `search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    // components:{
    //     Foot
    // },
    // filters:{
    //     number(price){
    //         return price.toFixed(2)
    //     }
    // }
    mixins:[mixin]
})
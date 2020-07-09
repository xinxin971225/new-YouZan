import 'css/common.css'
import './search.css'

import Vue from 'vue'
// import axios from 'axios'
// import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'
import mockData from 'js/mockData.js'

let {keyword, id} = qs.parse(location.search.substr(1))
import mixin from 'js/mixin.js'

console.log(mockData.searchList)
new Vue({
    el:'.container',
    data:{
        searchList:null,
        keyword,
        isShow: false
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
                this.searchList = mockData.searchList
        },
        move() {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if(scrollTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },     
        toTop(){
            Velocity(document.documentElement, "scroll", { duration: 1000 })
        }
    },
    mixins:[mixin]
}) 
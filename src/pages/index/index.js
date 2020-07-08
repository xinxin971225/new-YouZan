import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mockData from 'js/mockData.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll)

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

console.log(mockData.listsdata())

let app = new Vue({
    el: '#app',
    data: {
        lists: null,
        pageNum: 1,
        pageSize: 6,
        loading: false,
        allLoaded: false,
        bannerLists: null,
        obj: {
            age: 20
        }
    },
    created() {
        this.getLists()
        this.getBanner()
    },
    methods: {
        getLists() {
            if (this.allLoaded) return
            //数据截留
            this.loading = true
            let curLists = mockData.listsdata().Lists
            //判断所有数据是否加载完毕
            if (curLists.length < this.pageSize) {
                this.allLoaded = true
            }
            if (this.lists) {
                setTimeout(() => {
                    this.lists = this.lists.concat(curLists)
                    this.loading = false
                }, 1000)
            } else {
                //第一次请求数据
                this.lists = curLists
                this.loading = false
            }
            this.pageNum++

        },
        getBanner() {
            this.bannerLists = mockData.banLists.Lists
        }
    },
    components: {
        Foot,
        Swipe
    }
})
import Vue from 'vue'
import Vuex from 'vuex'
import {Article } from "network/study.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        curArticle:new Article({}),
        studyArticles:[],
        results:[],
        count:6666666666
    },
    mutations:{
        changeArticle(state,article){
            let newArticle = new Article(article)
            state.curArticle = newArticle
            // console.log("vuex curArticle",state.curArticle.views);
        },
        setStudyArticles(state,articles){
            state.studyArticles = articles
            // console.log("vuex - ",state.studyArticles.length);
        },
        setSearchResults(state,results){
            state.results = results
        }
    }
})

export default store
import Vue from 'vue';
import Vuex from 'vuex';
import { fetchListItem, fetchUserInfo, fetchAskItem } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 데이터 저장하는 일
    list: [],
    user:'',
    item:''
  },
  mutations: {
    // state에 저장
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ITEM(state, id) {
      console.log(id);
      
      state.item = id;
    }
  },
  actions: {
    // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, 뮤테이션에 넘김
    // promise 방식
    // FETCH_LIST(context, pageName) {
    //     return fetchListItem(pageName)
    //         .then(res => {
    //             context.commit('SET_LIST', res.data);
    //             return res;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },
    async FETCH_LIST(context, pageName) {
      try {
        const res = await fetchListItem(pageName);
        context.commit("SET_LIST", res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
    async FETCH_USER(context, userName) {
      try {
        const res = await fetchUserInfo(userName);
        context.commit("SET_USER", res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
    async FETCH_ITEM(context, id) {
      try {
        const res = await fetchAskItem(id);
        context.commit("SET_ITEM", res.data);
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  }
});

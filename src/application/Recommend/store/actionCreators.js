/*
* 存放不同action的文件
* */

import * as actionType from './constants'
import {fromJS} from "immutable";
import {getBannerListApi, getRecommendListApi} from "../../../api/request";

export const changeBannerList = data => ({
    type: actionType.CHANGE_BANNER,
    data: fromJS(data)
})

export const changeRecommendList = data => ({
    type: actionType.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})

export const getBannerList = () => {
    return (dispatch) => {
        getBannerListApi().then(res => {
            dispatch(changeBannerList(res.banners))
        }).catch(() => {
            console.log("轮播图数据传输错误")
        })
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListApi().then(res => {
            dispatch(changeRecommendList(res.result))
        }).catch(() => {
            console.log("推荐列表数据传输错误")
        })
    }
}


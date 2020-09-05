import request from './config'

export const getBannerListApi = () => {
    return request.get('/banner')
}

export const getRecommendListApi = () => {
    return request.get('/personalized')
}
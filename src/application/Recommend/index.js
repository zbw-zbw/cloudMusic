import React from 'react';
import {renderRoutes} from "react-router-config";
import Slider from "../../components/slider";
import RecommendList from "../../components/list"
function Recommend(props) {
	const {route} = props

	//mock数据
	const bannerList = [1, 2, 3, 4].map(item => {
		return {imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"}
	})

	const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
		return {
			id: 1,
			picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
			playCount: 120000,
			name: '薛之谦唱歌贼好听。'
		}
	})

	return (
		<div>
			<Slider bannerList={bannerList}/>
			<RecommendList recommendList={recommendList}/>
			{renderRoutes(route.routes)}
		</div>
	)
}

export default React.memo(Recommend);
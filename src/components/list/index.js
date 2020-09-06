import React from "react";
import {List, Items} from './style'
import {getCount} from "../../api/utils";
import LazyLoad from "react-lazyload"

function RecommendList(props) {
    const {recommendList} = props
    return (
        <List>
            <h2 className='title'>推荐歌单</h2>
            <Items>
                {
                    recommendList.map(item => {
                        return (
                            <div className='item' key={item.id}>
                                {/*<LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}>*/}
                                <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                                {/*</LazyLoad>*/}
                                <div className='playCountBox'>
                                    <i className='iconfont play'>&#xe885;</i>
                                    <span>{getCount(item.playCount)}</span>
                                </div>
                                <div className='descBox'>{item.name}</div>
                            </div>
                        )
                    })
                }
            </Items>
        </List>
    )
}

export default React.memo(RecommendList)
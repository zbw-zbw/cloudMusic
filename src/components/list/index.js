import React from "react";
import {List, Items} from './style'
import {getCount} from "../../api/utils";

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
                                <img src={item.picUrl} alt="music"/>
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
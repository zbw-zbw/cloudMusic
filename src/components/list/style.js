import styled from "styled-components";
import style from "../../assets/global-style"

export const List = styled.div`
	width: 98%;
	margin: 0 auto;
	.title {
		font-size: 14px;
		font-weight: bold;
		line-height: 60px;
	}
`

export const Items = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.item {
		width: 120px;
		position: relative;
		line-height: 16px;
		img {
			width: 120px;
			height: 120px;
            border-radius: 5px;
		}
		.playCountBox {
			position: absolute;
			right: 2px;
			top: 2px;
			color: white;
			font-size: 12px;
		}
		.descBox {
			font-size: 12px;
			color: #2e3030;
			margin-top: 2px;
			height: 50px;
		}
	}
`
// import { useEffect, useState } from "react";
// import styled from "styled-components"
// import Category from "./Category";
//
// const StyledCategory = styled.div`
// 	background: rgb(234, 234, 234);
// 	border-radius: 2px;
// 	border: 1px solid lightgray;
// 	margin: 2px 0;
// `;
//
// const StyledHeaderDiv = styled.div`
// 	display: flex;
// 	align-items: center;
// 	background: lightgray;
// 	cursor: pointer;
//
// 	> img {
// 		height: 16px;
// 		margin-right: 4px;
// 	}
//
// 	&:hover {
// 		background: rgb(234, 234, 234);
// 	}
// `;
//
// interface Props {
// 	name: string;
// 	children?: React.ReactNode;
// 	onExpand: () => void;
// }
//
// export default function SubCategory(props: Props) {
// 	// const [isExpanded, setIsExpanded] = useState(false);
// 	//
// 	// useEffect(() => {
// 	// 	if (isExpanded) {
// 	// 		console.log("fetching data...");
// 	// 		props.onExpand();
// 	// 	}
// 	// }, [isExpanded])
// 	//
// 	return (
// 		<Category name={props.name} onExpand={props.onExpand}>
// 			{props.children}
// 		</Category>
// 	)
// }

import styled from "styled-components";
import { StyledCategory } from "./Category";

export const SubCategory = styled(StyledCategory)`
	background-color: red;
`;

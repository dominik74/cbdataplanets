import { useEffect, useState } from "react";
import styled from "styled-components"

interface StyleProps {
	$isSubCategory: boolean;
}

export const StyledCategory = styled.div<StyleProps>`
	background: rgb(234, 234, 234);
	border-radius: 2px;
	border: 1px solid lightgray;
	margin: 2px 0;

	${props => (props.$isSubCategory &&
		"background: rgb(190, 190, 190);"
	)};
`;

const StyledHeaderDiv = styled.div<StyleProps>`
	display: flex;
	align-items: center;
	background: lightgray;
	cursor: pointer;

	> img {
		height: 16px;
		margin-right: 4px;
	}

	&:hover {
		background: rgb(234, 234, 234);
	}

	${props => (props.$isSubCategory &&`
		background: rgb(170, 170, 170);

		&:hover {
			background: rgb(190, 190, 190);
		}
	`
	)};
`;

const StyledChildrenDiv = styled.div`
	padding: 0 2px;
`;

interface Props {
	name: string;
	children?: React.ReactNode;
	onExpand: () => void;
	isSubCategory?: boolean;
}

export default function Category(props: Props) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (isExpanded) {
			console.log("fetching data...");
			props.onExpand();
		}
	}, [isExpanded])

	return (
		<StyledCategory $isSubCategory={props.isSubCategory ? props.isSubCategory : false}>
			<StyledHeaderDiv onClick={() => setIsExpanded(!isExpanded)} $isSubCategory={props.isSubCategory ? props.isSubCategory : false}>
				<img src={isExpanded ? "/arrow-down.svg" : "/arrow-right.svg"} alt="arrow" />
				{props.name}</StyledHeaderDiv>
			{isExpanded && 
				<>
					{props.children ? 
							<StyledChildrenDiv>
								{props.children}
							</StyledChildrenDiv>
						:
							<p>Loading...</p>
					}
				</>
			}
		</StyledCategory>
	)
}

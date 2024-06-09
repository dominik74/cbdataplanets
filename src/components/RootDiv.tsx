import styled from "styled-components";

const StyledRootDiv = styled.div`
	display: flex;	
	flex-direction: column;
	height: 100vh;

	@media (min-width: 790px) {
		align-items: center;
	}
`;

interface Props {
	children?: React.ReactNode;
}

export default function RootDiv(props: Props) {
	return (
		<StyledRootDiv>
			{props.children}
		</StyledRootDiv>		
	)
}

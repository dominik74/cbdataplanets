import styled from "styled-components"

const StyledMainContainer = styled.div`
	display: flex;
	margin: 35px 35px;
	height: 100%;
	border: 1px solid lightgray;
	border-radius: 8px;
	overflow: hidden;

	@media (min-width: 790px) {
		width: 720px;
		// width: 1450px;
	}
`;

interface Props {
	children?: React.ReactNode;
}

export default function MainContainer(props: Props) {
	return (
		<StyledMainContainer>
			{props.children}
		</StyledMainContainer>
	)
}

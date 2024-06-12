import styled from "styled-components"

const StyledMainContainer = styled.div`
	display: flex;
	margin: 15px;
	height: 100%;
	border: 1px solid lightgray;
	border-radius: 8px;
	overflow: hidden;

	@media (min-width: 1054px) {
		width: 1024px;
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

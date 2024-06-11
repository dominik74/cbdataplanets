import { AppContext } from "@/AppContext";
import { useContext } from "react";
import styled from "styled-components"

const StyledAside = styled.aside`
	width: 256px;
	border-right: 1px solid lightgray;
	padding: 16px;
	background: rgb(234, 234, 234);
 	overflow-y: auto;
`;

interface StyledLiProps {
	$isSelected: boolean;
}

const StyledUl = styled.ul`
	list-style-type: none;
	padding-left: 0px;
`;

const StyledLi = styled.li<StyledLiProps>`
	background-color: ${props => (props.$isSelected ? "#0066cc2e" : "none")};
	border: 1px solid ${props => (props.$isSelected ? "#0066cc" : "transparent")};
	// color: ${props => (props.$isSelected ? "#0066cc" : "black")};
// font-weight: ${props => (props.$isSelected ? "bold" : "normal")};
	cursor: pointer;
	border-radius: 2px;
	&:hover {
		background-color: #0066cc2e;
		// background-color: lightblue;
		border: 1px solid #0066cc;
		// color: #0066cc;
	}
`;

interface Props {
	children?: React.ReactNode;
	selectedPlanetId: number;
	setSelectedPlanetId: React.Dispatch<React.SetStateAction<number>>;
}

export default function Aside(props: Props) {
	const {planets} = useContext(AppContext);

	function selectPlanet(id: number) {
		props.setSelectedPlanetId(id);
	}

	return (
		<StyledAside>
			{props.children}
			<StyledUl>
				{planets.map((planet, i) => (
					<StyledLi key={i} $isSelected={i === props.selectedPlanetId} onClick={() => selectPlanet(i)}>{planet.name}</StyledLi>
				))}
			</StyledUl>
		</StyledAside>	
	)
}

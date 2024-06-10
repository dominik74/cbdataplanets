import styled from "styled-components";

export const IconButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	border: 1px solid lightgray;
	width: 32px;
	height: 28px;
	background: white;
	border-radius: 2px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;

	&:hover:enabled {
		background-color: #0066cc2e;
		border: 1px solid #0066cc;
	}

	> img {
		height: 16px;
	}

	&:disabled {
		background: transparent;
	}

	&:disabled > img {
		color: gray;
		filter: invert(42%) saturate(1352%) brightness(119%) contrast(119%);
	}
`;


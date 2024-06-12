import styled from "styled-components";

export const Button = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	border: none;
	min-width: 96px;
	height: 28px;
	background: none;
	border-radius: 2px;
	text-align: center;
	vertical-align: middle;

	&:hover:enabled {
		background-color: #0066cc2e;
		border: 1px solid #0066cc;
		cursor: pointer;
	}

	> img {
		height: 16px;
	}

	&:disabled {
		color: gray;
	}
`;


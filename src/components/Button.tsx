import styled from "styled-components";

export const Button = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	border: 1px solid lightgray;
	min-width: 96px;
	height: 28px;
	background: white;
	border-radius: 2px;
	text-align: center;
	vertical-align: middle;

	&:hover:enabled {
		background-color: #0066cc2e;
		border: 1px solid #0066cc;
	}

	> img {
		height: 16px;
	}

	&:disabled {
		color: gray;
	}
`;


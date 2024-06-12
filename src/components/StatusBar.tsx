import styled from "styled-components";

interface StyledStatusBarProps {
	$error: boolean;
  $hide: boolean;
}

const StyledStatusBar = styled.div<StyledStatusBarProps>`
  background-color: ${props => (props.$error ? "#fecaca" : "rgb(234, 234, 234)")};
  position: absolute;
  width: 100vw;
  text-align: center;
  align-self: stretch;
  visibility: ${props => (props.$hide ? "hidden" : "visible")};
  height: 25px;
`;

interface Props {
  message: string;
  error: boolean;
}

export default function StatusBar(props: Props): React.ReactNode {
  return (
    <StyledStatusBar $error={props.error} $hide={props.message === ""}>
      {props.message !== "" ?
        <>{props.message}</>
          :
        <>Hotovo</>
      }
    </StyledStatusBar>
  );
}

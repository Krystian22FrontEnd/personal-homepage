import { LoadingWrapper, LoadingText, Loader } from "./styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingText>Please wait, projects are being loaded...</LoadingText>
      <Loader />
    </LoadingWrapper>
  );
};

export default Loading;

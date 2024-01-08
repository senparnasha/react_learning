import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Opps...</h1>
      <h1>This page is not found</h1>
      <h1>{error.status}</h1>
      <h1>{error.statusText}</h1>
    </>
  );
};

export default Error;

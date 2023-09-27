// import React from 'react'

// const ErrorPage = () => {
//   return (
//     <div>ErrorPage</div>
//   )
// }

// export default ErrorPage

import { useRouteError } from 'react-router-dom';


function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  if (error.status === 400) {
    title = 'خطای اتصال';
    message = 'لطفا اتصال اینترنت خود را بررسی کنید.';
  }

  return (
    <>
        <p>{message}</p>
    </>
  );
}

export default ErrorPage;

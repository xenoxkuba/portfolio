import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="bg-gradient-to-r from-red-200 to-fuchsia-900 min-h-screen text-4xl font-bold text-center text-white mb-8"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-300 text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

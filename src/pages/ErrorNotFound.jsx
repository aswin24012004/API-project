import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "underline",
          marginTop: "20px",
          backgroundColor: "blue",
          border: "1px solid blue",
          textDecoration: 'none',
          padding:'5px'
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};
export default ErrorNotFound;

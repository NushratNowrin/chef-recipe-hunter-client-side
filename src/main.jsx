import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes.jsx";
import AuthProviders from "./Provider/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router}></RouterProvider>
		</AuthProviders>
	</React.StrictMode>
);

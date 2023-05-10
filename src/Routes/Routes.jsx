import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import Recipes from "../Single/Recipes/Recipes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/chef/:id",
				element: <ChefDetails></ChefDetails>,
				loader: ({ params }) =>
					fetch(
						`https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/chefs/${params.id}`
					),
			},
			{
				path: "/recipes",
				element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>
			},
			{
				path: "*",
				element: <Error></Error>,
			},
		],
	},
]);

export default router;

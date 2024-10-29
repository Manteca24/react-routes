import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HeaderLog from "./components/HeaderLog";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Header />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/projects', element: <Projects /> },
            { path: '/resume', element: <Resume /> }
        ]
    },
    {
        path: '/dashboard',
        element: <HeaderLog />,
        children: [
            { path: '/dashboard', element: <Home /> },
            { path: '/dashboard/cocreta', element: <Projects /> },
            { path: '/dashboard/luffy', element: <Resume /> }
        ]
    }
])

export default router
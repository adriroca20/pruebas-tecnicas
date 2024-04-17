import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import { Landing } from "./screens/Landing";
import { NotFoundScreen } from "./screens/NotFoundScreen";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Landing />} errorElement={<NotFoundScreen />} />
        </Route>
    )
)
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import { Landing } from "./screens/Landing";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { VideoScreen } from "./screens/VideoScreen";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Landing />} errorElement={<NotFoundScreen />} />
            <Route path="video-player/:id" element={<VideoScreen/>} errorElement={<NotFoundScreen />}></Route>
            <Route path="*" element={<NotFoundScreen />} />
        </Route>
    )
)
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import { Landing } from "./screens/Landing";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { WorkInProgressScreen } from "./screens/WorkInProgressScreen";
import { VideoScreen } from "./screens/VideoScreen";
import UploadVideoScreen from "./screens/UploadVideoScreen";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Landing />} errorElement={<NotFoundScreen />} />
            <Route path="video-player/:id" element={<VideoScreen/>} errorElement={<NotFoundScreen />}></Route>
            <Route path="upload" element={<UploadVideoScreen />} errorElement={<NotFoundScreen />} />
            <Route path="about" element={<WorkInProgressScreen />} errorElement={<NotFoundScreen />} />
            <Route path="contact" element={<WorkInProgressScreen />} errorElement={<NotFoundScreen />} />
            <Route path="login" element={<WorkInProgressScreen />} errorElement={<NotFoundScreen />} />
            <Route path="signup" element={<WorkInProgressScreen />} errorElement={<NotFoundScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Route>
    )
)
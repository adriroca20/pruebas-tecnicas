import { test, expect } from '@playwright/test';
import { IMedia } from '../src/interfaces/media.interface';
const LOCALHOST_URL = "http://localhost:5173/"
const MEDIA_MOCK: IMedia = {
  "id": "63d4ec71-5df7-4a0e-9216-2510d47649e5",
  "title": "Plane sample",
  "description": "Despegue ligero",
  "duration": 1759,
  "tags": "Vuelo, Aviones, Piloto",
  "filedata": {
    "bitrate": 1500,
    "fileSize": 361993216,
    "filename": "63d4ec71-5df7-4a0e-9216-2510d47649e5_Fast_H1500.mp4"
  },
  "thumbnail": {
    "id": "45e237c6-41be-40ec-9e20-0ae3c0bc2b52",
    "name": "thumbnail-media-63d4ec71-5df7-4a0e-9216-2510d47649e5",
    "filename": "63d4ec71-5df7-4a0e-9216-2510d47649e5_3.jpg",
    "thumbnailroute": "https://progressive.codev8.net/userdatanew/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/thumbnails/63d4ec71-5df7-4a0e-9216-2510d47649e5_3.jpg"
  },
  "mediaroute": "https://storagecdn.codev8.net/ondemand/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/63d4ec71-5df7-4a0e-9216-2510d47649e5_Fast_H1500.mp4"
}
test('Landing page load', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
test("Wrong route redirects to 404", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "wrong-route");
  await expect(page).toHaveTitle(/404 Not Found - MyTube/);
});
test("Video player page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + `video-player/${MEDIA_MOCK.id}`);
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
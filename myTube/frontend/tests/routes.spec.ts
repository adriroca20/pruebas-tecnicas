import { test, expect } from '@playwright/test';
import { LOCALHOST_URL, MEDIA_MOCK } from './constants';

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
test("Upload page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "upload");
  const heading = await page.getByRole('heading', { name: 'Upload Video' })
  await expect(heading).not.toBeNull();
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
test("About page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "about");
  const heading = await page.getByRole('heading', { name: 'Work in progress, come back' })
  await expect(heading).not.toBeNull();
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
test("Contact page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "contact");
  const heading = await page.getByRole('heading', { name: 'Work in progress, come back' })
  await expect(heading).not.toBeNull();
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
}
);
test("Login page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "login");
  const heading = await page.getByRole('heading', { name: 'Work in progress, come back' })
  await expect(heading).not.toBeNull();
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
test("Signup page load", async ({ page }) => {
  await page.goto(LOCALHOST_URL + "signup");
  const heading = await page.getByRole('heading', { name: 'Work in progress, come back' })
  await expect(heading).not.toBeNull();
  await expect(page).toHaveTitle(/MyTube - Corporate Videos/);
});
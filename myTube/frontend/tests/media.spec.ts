import { test, expect } from '@playwright/test';
import { LOCALHOST_URL, MEDIA_MOCK } from './constants';

test('Click on video in home page should navigate to video page and show IFrame and title', async ({ page }) => {
    await page.goto('http://localhost:5173/#home');
    await page.locator('.absolute > .absolute').first().click();
    const iframe = await page.locator('iframe');
    const heading = await page.locator('div').filter({ hasText: /^Plane sampleDespegue ligero$/ }).getByRole('heading').click();
    await expect(iframe).toHaveAttribute('src', MEDIA_MOCK.mediaroute);
    await expect(heading).not.toBeNull();
  });

test("Filter videos with browser should filter the videos and find 2", async({page})=>{
    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('Browse...').click();
    await page.getByPlaceholder('Browse...').fill('sample');
    await page.getByPlaceholder('Browse...').press('Enter');
    const filteredVideos = await page.locator('.absolute > .absolute').count();
    await expect(filteredVideos).toBe(2);
})

test("Filter videos with browser should filter the videos and find no coincidences", async({page})=>{
    await page.goto('http://localhost:5173/');
    await page.getByPlaceholder('Browse...').click();
    await page.getByPlaceholder('Browse...').fill('noCoincidences');
    await page.getByPlaceholder('Browse...').press('Enter');
    const notFoundVideosMessage = await page.getByRole('heading', { name: 'No videos found' })
    const filteredVideos = await page.locator('.absolute > .absolute').count();
    await expect (filteredVideos).toBe(0);
    await expect (notFoundVideosMessage).not.toBeNull();
})
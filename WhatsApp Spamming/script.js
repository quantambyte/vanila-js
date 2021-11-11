const peppeteer = require('puppeteer');

const scrape = async (url, contact) => {
  const browser = await peppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(
    `span [title='${contact}']`
  );
  const target = await page.$(
    `span [title='${contact}']`
  );
  await target.click();

  const input = await page.$(
    '#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text'
  );

  for (let i = 0; i < 100; i++) {
    await input.type(`Hello N${i}gga`);
    await page.keyboard.press('Enter');
  }
};

scrape('https://web.whatsapp.com/', contactName);

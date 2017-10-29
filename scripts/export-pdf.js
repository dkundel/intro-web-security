const puppeteer = require('puppeteer');
const { resolve } = require('path');
const { promisify } = require('util');
const mkdir = promisify(require('mkdirp'));

async function run() {
  const folderPath = resolve(process.cwd(), 'export');
  await mkdir(folderPath);
  const path = resolve(folderPath, `${process.argv[2]}.pdf`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/#/?export', {
    waitUntil: 'networkidle'
  });
  await page.pdf({
    path,
    width: '1280px',
    height: '720px',
    printBackground: true
  });
  await browser.close();
}

run().catch(err => console.error(err));

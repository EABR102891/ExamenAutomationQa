
import { test, expect } from '@playwright/test';
import { assert } from 'console';
const HomePage = require('../page-objects/HomePage');

const Utils = require('../page-objects/Utils');

const mainUrl = 'https://www.saucedemo.com/v1/';


test('Success_Login: Verificar inicio de sesión exitoso con usuario standard_user', async ({ page }) => {
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage(mainUrl);
  await page.waitForTimeout(1000);
  await homePage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(1000);
  const bodyTitle = await page.locator('.product_label').textContent();
  assert(bodyTitle === 'Products', 'The body title is not "Products"');
});

test('UnSuccess_Login: Verificar inicio de sesión sin exito con usuario locked_out_user', async ({ page }) => {
  
  await page.setViewportSize({ width: 1920, height: 1080 });
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage(mainUrl);
  await page.waitForTimeout(1000);
  await homePage.login('locked_out_user', 'secret_sauce');
  await page.waitForTimeout(1000);

  const errorMessage = await page.locator('[data-test="error"]');
  await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out');
});

test('Add_items_to_the_cart: Verificar el agregar artículos al carrito', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 });
  const homePage = new HomePage(page);
  const utils = new Utils(page);
 await page.waitForTimeout(1000);
  await homePage.navigateToHomePage(mainUrl);
  await homePage.login('standard_user', 'secret_sauce');
 await page.waitForTimeout(1000);
  const items = await page.locator('.inventory_list .inventory_item').all();

  for (const item of items) {
    const button = await item.locator('.btn_primary.btn_inventory');
    await button.click();
  }
await page.waitForTimeout(1000);
  await page.locator('.shopping_cart_link.fa-layers.fa-fw').click();
 await page.waitForTimeout(1000);

  const subHeader = await page.locator('.subheader').textContent();
 await page.waitForTimeout(1000);
  assert(subHeader === 'Your Cart', 'The subheader is not "Your Cart"');
});

test('complete_the_purchase_process : Verificar el usuario completa el proceso de compra' , async ({ page }) => {
 
  await page.setViewportSize({ width: 1920, height: 1080 });
  const homePage = new HomePage(page);
  const utils = new Utils(page);
   await page.waitForTimeout(1000);
  await homePage.navigateToHomePage(mainUrl);
  await homePage.login('standard_user', 'secret_sauce');
 await page.waitForTimeout(1000);
  const items = await page.locator('.inventory_list .inventory_item').all();
 await page.waitForTimeout(1000);
  for (const item of items) {
    const button = await item.locator('.btn_primary.btn_inventory');
    await button.click();
  }
await page.waitForTimeout(1000);
  await page.locator('.shopping_cart_link.fa-layers.fa-fw').click();
 await page.waitForTimeout(1000);
  const prices = await page.locator('.inventory_item_price').all();
await page.waitForTimeout(1000);
  console.log(prices);
  let totalPrice = 0
  for (const price of prices){
    const priceText = await price.textContent();
    totalPrice += parseFloat(priceText.replace('$', ''));
  }
 await page.waitForTimeout(1000);

  await page.locator('.btn_action.checkout_button').click();

  await page.locator('#first-name').fill('John');
  await page.locator('#last-name').fill('Doe');
  await page.locator('#postal-code').fill('12345');

  await page.locator('[type=submit]').click();
await page.waitForTimeout(1000);
  const total = await page.locator('.summary_total_label').textContent();
  const totalNumbers = extractNumbers(total);
 await page.waitForTimeout(1000);
  assert(totalPrice == totalNumbers, 'The total price is not correct');
});


function extractNumbers(str) {
  const numbers = str.match(/\d+/g);
  return numbers ? numbers.map(Number) : [];
}
import { Selector } from 'testcafe';

fixture('Login Test')
  .page('https://dev.deepthought.education/login');

const usernameInput = Selector('#username'); 
const passwordInput = Selector('#password'); 
const loginButton = Selector('button#login[type="submit"]');
const errorMessage = Selector('#login-error-notify'); 
const dashboardSection = Selector('#content'); // Selector for the dashboard section

test('Successful Login and Check Dashboard', async t => {
  await t
    .typeText(usernameInput, 'Root')
    .typeText(passwordInput, 'xewmax-Zydfyj-qugbo0')
    .click(loginButton)
    .expect(dashboardSection.exists).ok(); // Check the presence of the dashboard section
});

test('Unsuccessful Login', async t => {
  await t
    .typeText(usernameInput, 'invalid_username')
    .typeText(passwordInput, 'invalid_password')
    .click(loginButton)
    .expect(errorMessage.exists).ok();
});

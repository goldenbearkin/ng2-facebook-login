import { FacebookLoginPage } from './app.po';

describe('facebook-login App', function() {
  let page: FacebookLoginPage;

  beforeEach(() => {
    page = new FacebookLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

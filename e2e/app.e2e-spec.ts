import { HackrRedditPage } from './app.po';

describe('hackr-reddit App', () => {
  let page: HackrRedditPage;

  beforeEach(() => {
    page = new HackrRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

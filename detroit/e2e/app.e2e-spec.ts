import { DetroitPage } from './app.po';

describe('detroit App', () => {
  let page: DetroitPage;

  beforeEach(() => {
    page = new DetroitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

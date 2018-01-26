import { GetLitPage } from './app.po';

describe('get-lit App', () => {
  let page: GetLitPage;

  beforeEach(() => {
    page = new GetLitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

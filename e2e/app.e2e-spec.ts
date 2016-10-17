import { CharsheetPage } from './app.po';

describe('charsheet App', function() {
  let page: CharsheetPage;

  beforeEach(() => {
    page = new CharsheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

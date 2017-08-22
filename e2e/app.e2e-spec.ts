import { ChalkdocPage } from './app.po';

describe('chalkdoc App', function() {
  let page: ChalkdocPage;

  beforeEach(() => {
    page = new ChalkdocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

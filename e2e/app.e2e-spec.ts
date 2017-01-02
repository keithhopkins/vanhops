import { VanhopsPage } from './app.po';

describe('vanhops App', function() {
  let page: VanhopsPage;

  beforeEach(() => {
    page = new VanhopsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

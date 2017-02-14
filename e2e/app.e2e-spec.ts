import { PrimengdemoPage } from './app.po';

describe('primengdemo App', function() {
  let page: PrimengdemoPage;

  beforeEach(() => {
    page = new PrimengdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

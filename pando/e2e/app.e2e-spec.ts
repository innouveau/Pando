import { PandoPage } from './app.po';

describe('pando App', () => {
  let page: PandoPage;

  beforeEach(() => {
    page = new PandoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { EsUdemyPage } from './app.po';

describe('es-udemy App', () => {
  let page: EsUdemyPage;

  beforeEach(() => {
    page = new EsUdemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

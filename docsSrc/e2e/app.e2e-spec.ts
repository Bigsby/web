import { DocsSrcPage } from './app.po';

describe('docs-src App', () => {
  let page: DocsSrcPage;

  beforeEach(() => {
    page = new DocsSrcPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import HelpDesk from '../components/HelpDesk/HelpDesk';

test('Test innerHtml', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new HelpDesk(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(HelpDesk.markup);
});

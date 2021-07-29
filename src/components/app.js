import HelpDesk from './HelpDesk/HelpDesk';

document.addEventListener('DOMContentLoaded', () => {
  const perent = document.querySelector('.conteiner');
  const widget = new HelpDesk(perent);
  widget.bindToDOM();
  widget.allTicketsReq();
});

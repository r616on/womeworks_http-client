import HelpDesk from './HelpDesk/HelpDesk';
import createRequest from './libs/createRequest';

document.addEventListener('DOMContentLoaded', () => {
  const perent = document.querySelector('.conteiner');
  const widget = new HelpDesk(perent);
  createRequest('allTickets');
  // async () => {
  //   await createRequest('allTickets');
  //   console.log('22');
  // };

  // widget.bindToDOM();
});

// const subscribeWidget = document.querySelector('[data-widget=subscribe]');
// const subscribeForm = subscribeWidget.querySelector('[data-id=subscribe-form]');
// const nameInput = subscribeWidget.querySelector('[data-id=name]');
// const phoneInput = subscribeWidget.querySelector('[data-id=phone]');

// subscribeForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const params = new URLSearchParams();
//   // Array.from(subscribeForm.elements)
//   //   .filter(({name}) => name).forEach(({name, value}) => params
//   //   .append(name, value));
//   // const xhr = new XMLHttpRequest();
//   // xhr.open('POST', 'http://localhost:7070');
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `http://localhost:7070/?method=allTickets`);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       try {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   });
// });

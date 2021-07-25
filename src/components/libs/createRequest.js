export default function createRequest(parametr, metod = 'GET') {
  const http = 'http://localhost';
  const port = 7070;

  const params = new URLSearchParams();
  params.append('method', parametr);
  const xhr = new XMLHttpRequest();
  if (metod === 'GET') {
    xhr.open('GET', `${http}:${port}/?${params}`);
    xhr.send();
  } else if (method === 'POST') {
    xhr.open('POST', `${http}:${port}`);
    xhr.send(params);
  } else {
    return;
  }
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        return data;
      } catch (e) {
        return console.error(e);
      }
    }
  });
}

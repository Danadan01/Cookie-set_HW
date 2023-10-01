const buttn = document.querySelector('button');
const cookiesDiv = document.querySelector('.cookies');

document.cookie = 'userName=John; expires=Thu, 10 Oct 2023 12:00:00 UTC; path=/';
document.cookie = 'userSurname=Besos; expires=Thu, 10 Oct 2023 12:00:00 UTC; path=/';
document.cookie = 'userAge=25; expires=Thu, 10 Oct 2023 12:00:00 UTC; path=/';

function getCookies() {
  let cookies = '';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  ca.forEach(str => {
    cookies += `${str.split('=').join(' = ')}; <br>`;
  });

  return cookies
}

buttn.addEventListener('click', () => {

  cookiesDiv.innerHTML = getCookies();
})
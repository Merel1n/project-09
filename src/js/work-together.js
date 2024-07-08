import { postContacts } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('.input-form-work-together'),
  form: document.querySelector('.form-work-together'),
  inputComments: document.querySelector('.textarea-form-work-together'),
  modal: document.querySelector('.modal-backdrop'),
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const { email, comments } = e.target.elements;

  const data = { email: email.value.trim(), comment: comments.value.trim() };

  try {
    const posted = await postContacts(data);
    if (!posted) {
      return;
    }
    refs.modal.classList.remove('visually-hidden');

    refs.form.reset();
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please, try again.',
      position: 'topCenter',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      titleColor: '#fafafa',
    });
  }
});

refs.modal.addEventListener('click', e => {
  const { className } = e.target;
  if (className === 'modal-backdrop' || className === 'close-button') {
    refs.modal.classList.add('visually-hidden');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    refs.modal.classList.add('visually-hidden');
  }
});

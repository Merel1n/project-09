import { postContacts } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('.input-form-work-together'),
  form: document.querySelector('.form-work-together'),
  inputComments: document.querySelector('.textarea-form-work-together'),
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
    // iziToast.show({
    //   message: 'Contacts were posted successfully.',
    //   position: 'topCenter',
    //   backgroundColor: '#3CBC81',
    //   messageColor: '#fafafa',
    //   titleColor: '#fafafa',
    // });
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

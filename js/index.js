// Phone number validation

function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 9)}`;
      }
      function phoneNumberFormatter() {
        const inputField = document.getElementById('phone-number');
        const formattedInputValue = formatPhoneNumber(inputField.value);
        inputField.value = formattedInputValue;
}

// Success Page

var modalSuccess = null;
const showSuccess = () => {

  if(modalSuccess !== null) {
    modalSuccess.remove();
  }

  if(modalWrap !== null) {
    modalWrap.remove();
  }

  modalSuccess = document.createElement('div');
  modalSuccess.innerHTML = `
  <div class="modal fade " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
    <div class="modal-content success-page">
    <div>
      <button type="button" class="modal-icon float-end" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body text-center">
      <h3>Вітаємо</h3>
      <h5 class="mb-0">Вашу заявку успішно надіслано!</h5>
      <img class="story-image" src="images/postbox.svg"/>
      <p class="block-p">
        Ми зв’яжемося з вами для підтвердження найближчим часом.
      </p>
    </div>
  </div>
</div>
</div>
  `;

  document.body.append(modalSuccess);
  var success = new bootstrap.Modal(modalSuccess.querySelector('.modal'));
  success.show();
  modal.hide();
}

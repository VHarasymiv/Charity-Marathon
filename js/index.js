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

var modal = null;
var modalSuccess = null;
const showSuccess = () => {

  if(modalSuccess !== null) {
    modalSuccess.remove();
  }

  modalSuccess = document.createElement('div');
  modalSuccess.innerHTML = `
  <div class="modal fade " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
    <div class="modal-content success-page">
    <div>
      <button type="button" class="modal-icon float-end" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <h3 class="">Заявка на реєстрацію успішно відправлена!</h3>
      <p class="success-text">
        Дякуємо за те, що долучилися до нашої ініціативи. Менеджер зв’яжеться з вами на протязі дня.
      </p>
      <div class="text-center">
        <img class="story-image" src="images/success-image.png"/>
      </div>
    </div>
  </div>
</div>
</div>
  `;

  document.body.append(modalSuccess);
  var success = new bootstrap.Modal(modalSuccess.querySelector('.modal'));
  success.show();
  // modal.hide();
}

document.getElementById('form1').addEventListener('submit', showSuccess);

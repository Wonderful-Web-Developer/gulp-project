import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date')



//Burger menu
document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('.nav a');
        const burgerToggle = document.getElementById('burger-toggle');

        links.forEach(link => {
            link.addEventListener('click', () => {
                burgerToggle.checked = false;
          });
      });
});



//Slider on Swiper.js
const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //mousewheel: true,
    keyboard: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});









// Modal window
const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = ` 
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
    `
  ;

  const closeModal = () => {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, time);

    window.removeEventListener('keydown', handleCloseModal);
  };

  const handleCloseModal = event => {
    const target = event.target;

    if (
      target === modalElem || 
      (btnClose && target.closest(btnClose)) || 
      event.code === 'Escape'
    ) {
      closeModal();
    }
  };

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', handleCloseModal);
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', handleCloseModal);
  
  return closeModal;
};

const submitBookingForm = (closeModal) => {
  const form = document.getElementById('bookingForm');
  const dateInput = form.querySelector('input[type="date"]');
  const timeInput = form.querySelector('input[type="time"]');

  const selectedDate = new Date(dateInput.value);
  const selectedTime = timeInput.value.split(':');
  selectedDate.setHours(selectedTime[0], selectedTime[1]);

  const now = new Date();
  if (selectedDate < now) {
    alert('Выберите дату и время в будущем.');
    return;
  }

  if (form.checkValidity()) {
    closeModal(); 
    alert('Вы успешно забронировали место!');
  } else {
    form.reportValidity();
  }
};

const closeModal = modalController({
  modal: '.modal',
  btnOpen: '.section__button',
  btnClose: '.modal__close',
});


document.getElementById('bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  submitBookingForm(closeModal);
});



//Main form
document.getElementById('mainForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  if (this.checkValidity()) {
    this.reset();
    alert('Вы успешно подписались на рассылку!'); 
  }
});




// Block "Prices"
document.querySelectorAll('input[name="price-option"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        document.querySelector(".standard-price-content").style.display = "none";
        document.querySelector(".bootcamp-price-content").style.display = "none";
        document.querySelector(".vip-price-content").style.display = "none";
        document.querySelector(".simulators-content").style.display = "none";

        switch (event.target.value) {
            case "standard":
                document.querySelector(".standard-price-content").style.display = "block";
                break;
            case "bootcamp":
                document.querySelector(".bootcamp-price-content").style.display = "block";
                break;
            case "vip":
                document.querySelector(".vip-price-content").style.display = "block";
                break;
            case "simulators":
                document.querySelector(".simulators-content").style.display = "block";
                break;
        }
        document.getElementById('burger-toggle2').checked = false;
    });
});



// BLock "Components"
document.querySelectorAll('input[name="config-option"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        document.querySelector(".standard-content").style.display = "none";
        document.querySelector(".bootcamp-content").style.display = "none";
        document.querySelector(".vip-content").style.display = "none";

        switch (event.target.value) {
            case "standard":
                document.querySelector(".standard-content").style.display = "block";
                break;
            case "bootcamp":
                document.querySelector(".bootcamp-content").style.display = "block";
                break;
            case "vip":
                document.querySelector(".vip-content").style.display = "block";
                break;
        }
        document.getElementById('burger-toggle3').checked = false;
    });
});





//Map
const address = 'Титан Арена, Архангельск';

  document.getElementById('route-btn').addEventListener('click', () => {
    const urlAddress = encodeURIComponent(address);
    const url = `https://yandex.ru/maps/?rtext=~${urlAddress}&rtt=auto`;
    window.open(url, '_blank');
  });

  document.getElementById('taxi-btn').addEventListener('click', () => {
    window.open('https://taxi.yandex.ru/', '_blank');
  });



  //Map mobile
  const address2 = 'Титан Арена, Архангельск';

  document.getElementById('route-btn2').addEventListener('click', () => {
    const urlAddress = encodeURIComponent(address2);
    const url = `https://yandex.ru/maps/?rtext=~${urlAddress}&rtt=auto`;
    window.open(url, '_blank');
  });

  document.getElementById('taxi-btn2').addEventListener('click', () => {
    window.open('https://taxi.yandex.ru/', '_blank');
  });






// Button to top
window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

document.getElementById('backToTop').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
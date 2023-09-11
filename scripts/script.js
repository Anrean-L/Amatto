"use stict"

const langBtn = document.querySelector('.header__lang');

if (langBtn) {
    langBtn.addEventListener('click', function (e) {
        e.preventDefault();
        langBtn.classList.toggle('header__lang_open');
    })
}

const burger = document.querySelector('.header__burger-icon');
const header = document.querySelector('.header');
if (burger && header) {
    burger.addEventListener('click', function () {
        header.classList.toggle('header_active');
        burger.classList.toggle('burger_active');
        document.body.classList.toggle('_lock');
    })
}

const accordeons = document.querySelectorAll('.footer__open');
if (accordeons.length > 0) {
    // window.addEventListener('resize', move);

    accordeons.forEach((el) => el.addEventListener('click', function(e){
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width < 986) {
            const acc = el.nextSibling.nextSibling;
            acc.classList.toggle('footer__acc_closed');
            el.classList.toggle('footer__open_opened');
        }
    }));
};

const exUncover = document.querySelector('.examples__uncover');
const exItems = document.querySelectorAll('.examples__item');
if (exUncover && exItems.length > 0) {
    exUncover.addEventListener('click', function (e) {
        e.preventDefault();
        if (exUncover.lastChild.textContent == 'Раскрыть Ещё') {
            exUncover.lastChild.textContent = 'Скрыть';
            console.log('123 ' + exUncover.firstChild);
            exUncover.firstElementChild.style.transform = 'rotate(90deg)';
            exItems.forEach((el) => el.style.display = "block");
        } else {
            exUncover.lastChild.textContent = 'Раскрыть Ещё';
            exUncover.firstElementChild.removeAttribute("style");
            exItems.forEach((el) => el.removeAttribute("style"));
            exUncover.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    })
}

new Swiper('.hero__swiper', {
    pagination: {
        el: '.hero__swiper-pagination',
        clickable: true,
    }
});


new Swiper('.article__swiper', {
    pagination: {
        el: '.article__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.article__swiper-next',
        prevEl: '.article__swiper-prev',
    },
    spaceBetween: 20,
});

Fancybox.bind("[data-fancybox]", {});
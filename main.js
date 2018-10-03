const header = document.querySelector('header');
const headerInner = document.querySelector('.header-inner');
const headerPos = header.offsetTop;

function changeHeader() {
  document.addEventListener('scroll', function () {
    const scroll = $(document).scrollTop();

    const headerLogo = document.querySelectorAll;



    if (scroll > 30) {
      header.classList.add('bg-white');
      $('.logo svg path').css('fill', '#5C0A36');
      $('.logo svg').css('width', '20px');

      headerInner.style.padding = ' 13px 25px';

      $('.social svg path').css('fill', '#5C0A36');



      $('nav a').css('color', '#89004A');

    } else if ((scroll == 0)) {
      header.classList.remove('bg-white');
      $('.logo svg path').css('fill', '');
      $('nav a').css('color', '');
      $('.social svg path').css('fill', '');
      headerInner.style.padding = '';
      $('.logo svg').css('width', '');



    }
  });
}

function changeBackgroundColor() {

  document.addEventListener('scroll', function () {

    const pageTop = $(document).scrollTop();
    const background = document.querySelector('.first-element-container');

    const backgroundTop = document.querySelector('.first-element-container').offsetTop;

    console.log(pageTop)
    console.log(backgroundTop)

    if (pageTop > backgroundTop) {
      background.style.backgroundColor = "#5C0A36";
    } else {
      background.style.backgroundColor = "";

    }
  });
}

function changeVideoPoster() {
  if ($(window).width() < 480) {
    $('#video-pasaje').attr('poster', 'images/video-poster-mobile.jpg')
    $('video').attr('poster', 'images/video-poster-mobile.jpg')

  }
}

function progressBar() {

  const bodyTag = document.querySelector('body');
  const progressBarWidth = document.querySelector('div.progress');

  document.addEventListener('scroll', function () {
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;

    const percentage = pixels / totalScrollableDistance;

    progressBarWidth.style.width = `${100 * percentage}%`;
  });
}





function scrollToSections() {

  const aboutContent = $('section.first-element').offset().top - 100
  $('a#about').on('click', function () {
    $('html, body').animate({
      scrollTop: aboutContent
    },
      1000
    );
    return false;
  });


  const trailerContent = $('div#trailer-content').offset().top - 100
  $('a#trailer').on('click', function () {
    $('html, body').animate({
      scrollTop: trailerContent
    },
      1000
    );
    return false;
  });

  const prensaContent = $('div#prensa-content').offset().top - 100
  $('a#prensa').on('click', function () {
    $('html, body').animate({
      scrollTop: prensaContent
    },
      1000
    );
    return false;
  });

}


$(window).on("load", function () {
  changeHeader();
  changeVideoPoster();
  scrollToSections();
  changeBackgroundColor();
  progressBar();
});

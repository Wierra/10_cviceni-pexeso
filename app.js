const karticky = document.querySelectorAll('.karticka');

let otoceneKarty = [];

karticky.forEach((karticka, index) => {
  karticka.addEventListener('click', (event) => {
    karticka.classList.remove('otocena');
    otoceneKarty.push(index);

    if (otoceneKarty.length === 2) {
      const karta1 = karticky[otoceneKarty[0]];
      const karta2 = karticky[otoceneKarty[0]];
      const obrazekKarta1 = karticky[otoceneKarty[0]].querySelector('img');
      const obrazekKarta2 = karticky[otoceneKarty[1]].querySelector('img');

      if (obrazekKarta1.src != obrazekKarta2.src) {
        otoceneKarty.forEach((indexKarticky) => {
          setTimeout(() => {
            karticky[indexKarticky].classList.add('otocena');
          }, 1000);
        });
        otoceneKarty = [];
      } else {
        karta1.disabled = true;
        karta2.disabled = true;
        otoceneKarty = [];
      }
    }
  });
});
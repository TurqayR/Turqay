    document.querySelectorAll('.section7div1').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('open');
      });
    });

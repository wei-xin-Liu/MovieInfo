window.onload = () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);






    btnmovieText.onclick = function () {
        movieText.classList.toggle("expanded");
        btnmovieText.textContent = movieText.classList.contains("expanded") ? "更少..." : "更多...";
    }

    const buttons = document.querySelectorAll('#chooseticket button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 移除所有按鈕的 active 類
            buttons.forEach(btn => btn.classList.remove('choosedate'));
            // 為被點擊的按鈕添加 active 類
            this.classList.add('choosedate');
        });
    });



    

    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0');
            backToTopBtn.classList.add('opacity-100');
        } else {
            backToTopBtn.classList.remove('opacity-100');
            backToTopBtn.classList.add('opacity-0');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}



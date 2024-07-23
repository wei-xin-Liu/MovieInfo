window.onload = () => {
    btnmovieText.onclick = function() {
        movieText.classList.toggle("expanded");
        btnmovieText.textContent = movieText.classList.contains("expanded") ? "更少..." : "更多...";
    }

    const buttons = document.querySelectorAll('#chooseticket button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按鈕的 active 類
            buttons.forEach(btn => btn.classList.remove('choosedate'));
            // 為被點擊的按鈕添加 active 類
            this.classList.add('choosedate');
        });
    });
}

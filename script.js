document.addEventListener('DOMContentLoaded', function() {
    // ログインボタンがクリックされたときの処理
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのフォーム送信を防ぐ
            window.location.href = 'input.html'; // input.html に遷移
        });
    }
});
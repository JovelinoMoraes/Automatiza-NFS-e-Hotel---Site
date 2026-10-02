const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            menu.classList.remove("open");
        }
    });
}

function downloadPlaceholder(event) {
    event.preventDefault();
    alert("O link de download ainda não foi configurado. Edite o href do botão no arquivo index.html.");
}

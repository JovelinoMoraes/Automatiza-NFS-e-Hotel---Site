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

const compatibilityForm = document.querySelector("#compatibility-form");
const compatibilityResult = document.querySelector(".checker-result");

if (compatibilityForm && compatibilityResult) {
    compatibilityForm.addEventListener("submit", event => {
        event.preventDefault();

        const answers = new FormData(compatibilityForm);
        const isCompatible = [1, 2, 3, 4].every(question => answers.get(`question-${question}`) === "yes");

        compatibilityResult.hidden = false;
        compatibilityResult.classList.toggle("is-not-compatible", !isCompatible);

        if (isCompatible) {
            compatibilityResult.innerHTML = `
                <strong>Seu estabelecimento possui o perfil para utilizar o Automatiza NFS-e Hotel.</strong>
                <span>Antes da contratação, confirme a configuração tributária com seu contador.</span>
            `;
        } else {
            compatibilityResult.innerHTML = `
                <strong>O Automatiza NFS-e Hotel foi desenvolvido especificamente para operações de hospedagem com o perfil descrito acima.</strong>
                <span>Verifique as características da sua operação antes de adquirir a ferramenta.</span>
            `;
        }
    });
}


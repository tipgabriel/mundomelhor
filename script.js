<script>
    // Script para alternar o menu de navegação em telas menores
    document.addEventListener('DOMContentLoaded', () => {
        const menuButton = document.getElementById('menu-button');
        const header = document.querySelector('header');

        // Garante que o ícone do Font Awesome seja carregado, se ainda não estiver
        const loadFa = document.createElement('link');
        loadFa.rel = 'stylesheet';
        loadFa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(loadFa);
        
        // Adiciona um listener para o clique no botão
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                // Adiciona ou remove a classe 'menu-open' do header
                // Esta classe é usada no CSS que eu te forneci para mostrar o menu
                header.classList.toggle('menu-open');
                
                // Opcional: Altera o ícone de hambúrguer para um 'X'
                const icon = menuButton.querySelector('i');
                if (header.classList.contains('menu-open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
        
        // Coloca o ano atual no footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
    });
</script>

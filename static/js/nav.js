        const button = document.querySelector('.mobile-menu-button');
        const menu = document.querySelector('.mobile-menu');

        function checkScreenSize() {
            if (window.innerWidth >= 768) {
                button.classList.add('hidden');
                menu.classList.add('hidden');
            } else {
                menu.classList.remove('hidden');
                button.classList.remove('hidden');

            }
        }

        button.addEventListener('click', function () {
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });

        window.addEventListener('resize', function () {
            checkScreenSize();
        });

        checkScreenSize();


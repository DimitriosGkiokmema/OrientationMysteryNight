    function checkPass() {
        let pass = document.getElementById('password');

        if (pass.value == 'printMe') {
            showScroll()
        }
    }

    function showScroll() {
        let container = document.getElementById('pdf');
        container.style.display = "block"
    }
<script>
window.onload = function() {
    document.getElementById('loginButton').addEventListener('click', function(e) {
        e.preventDefault(); // Esto previene que el formulario se envíe
        // Redirige al usuario a la nueva página
        window.location.href = "http://127.0.0.1:5500/paguina_web/prueba.html";
        // Después de 5 segundos (5000 milisegundos), redirige al usuario de vuelta a la página original
        setTimeout(function() {
            window.location.href = "http://127.0.0.1:5500/paguina_web/indexxx.html#";
        }, 5000);
    })
}
</script>

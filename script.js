window.onload = function() {
    var fechaNacimiento = new Date('2001-04-12'); // Reemplaza YYYY-MM-DD con tu fecha de nacimiento
    var intervalo = setInterval(actualizarEdad, 100);
  
    function actualizarEdad() {
      var ahora = new Date();
      var edad = (ahora - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365.25); // Calcula la edad en años con decimales
      document.getElementById('edad').textContent = edad.toFixed(15); // Muestra la edad con 9 decimales
    }
  };
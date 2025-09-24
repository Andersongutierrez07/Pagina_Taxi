const form = document.getElementById("form-contacto");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value.trim();

    const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/;
    if (!regexNombre.test(nombre)) {
      alert("⚠️ Ingresa tu nombre completo y real (mínimo nombre y apellido, sin apodos ni caracteres raros).");
      return;
    }

    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(telefono)) {
      alert("⚠️ El número de teléfono debe contener exactamente 10 dígitos.");
      return;
    }

    const edadNum = parseInt(edad, 10);
    if (isNaN(edadNum) || edadNum < 6 || edadNum > 90) {
      alert("⚠️ La edad debe estar entre 6 y 90 años.");
      return;
    }

    if (!genero) {
      alert("⚠️ Por favor, selecciona tu género.");
      return;
    }

    const numeroWhatsApp = "573204911603";

    const texto = ` Necesito un servicio de taxi.%0A
  Nombre: ${nombre}%0A
  Teléfono: ${telefono}%0A
  Género: ${genero}%0A
  Edad: ${edadNum}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    window.open(url, "_blank");

    form.reset();
  });
}

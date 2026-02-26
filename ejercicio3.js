
function mostrarDireccion(direccion) {
  try {
    const { ciudad, pais } = direccion;
    console.log(`Ciudad: ${ciudad}, País: ${pais}, departamento: ${departamento}`);


    if (departamento){
      throw new Error("La información de la dirección no es válida"); 
    }
    
  }
  catch (error) {
    console.error(error.message);
    
  }
}

mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });



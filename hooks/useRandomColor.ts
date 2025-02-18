export const generateRandomHexColor = (): string => {
  // Hice una lsta de todos los poibles caracteres para generar
  const hexValues = "0123456789ABCDEF";

  let color = "#"; // <- El # para ponerselo al inicio

  // Como son 6 caracteres pues hice un arreglo que va 6 veces para que estos s generen
  for (let i = 0; i < 6; i++) {
    // En la parte de abaj lo que se hace es que vamos a generar un numro aleatorio ntre 0 y 1, se
    // multiplca por 16  y se redondea hacia atras con el math.floor para que sea un 15 ya que cada par de
    // caracteres va a ser un par hxadcimal osea de 16
    const randomIndex = Math.floor(Math.random() * 16);
    
    color += hexValues[randomIndex]; // <- Y aqui pues se van concatenano para formar el codigo del color para retornarlo al final
  }

  return color;
};
export const sumar = (a: number, b: number) => a + b;
export const dobleDe = (a: number) => sumar(a, a);

export function EjemploDestructuracionUsuario() {
    const usuario = {
        nombre: "Ana",
        edad: 30  };
    
    const { nombre, edad } = usuario;
    return `Nombre: ${nombre}, Edad: ${edad}`;
}
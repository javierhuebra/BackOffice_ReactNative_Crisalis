
export const fetchUsuarios = async (url, id, setIsLoadingCallback) => {
    try {
        setIsLoadingCallback(true);

        const response = await fetch(`${url}/api/usuarios${(id > 0) ? `/${id}` : ""}`);
        const data = await response.json();

        setIsLoadingCallback(false);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const crearUsuario = async (url, usuario, password, setIsLoadingCallback) => {
    try {
        setIsLoadingCallback(true);
        const response = await fetch(`${url}/api/usuarios`, {
            method: 'POST',
            body: JSON.stringify({ usuario, password }),
            headers: { 'Content-Type': 'application/json' }
        })   
        setIsLoadingCallback(false);
        return response;
                
    }
    catch (error) {
        console.error("Ocurrió un error al crear usuario:", error);
    }
}
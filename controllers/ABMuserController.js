
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

export const deleteUsuario = async (url, id) => {
    try {
        
        await fetch(`${url}/api/usuarios/${id}`, {
            method: 'PATCH'
        })
            .then(resp => {
                
                if (resp.ok) console.log("se cambio el estado correctamente");
                else console.log("no se pudo cambiar el estado");
            })
        
    }
    catch (error) {
        console.error("Ocurrió un error al cambiar estado de usuario:", error);
    }
}
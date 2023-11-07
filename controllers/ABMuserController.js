
export const fetchUsuarios = async (url, id, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);

        const response = await fetch(`${url}/api/usuarios${(id > 0) ? `/${id}` : ""}`,
            {
                headers: {
                    Authorization: `Bearer ${usuarioLogeado.token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();

        setIsLoadingCallback(false);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const crearUsuario = async (url, usuario, password, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);
        const response = await fetch(`${url}/api/usuarios`, {
            method: 'POST',
            body: JSON.stringify({ usuario, password }),
            headers: {
                Authorization: `Bearer ${usuarioLogeado.token}`,
                "Content-Type": "application/json",
            },
        })
        setIsLoadingCallback(false);
        return response;

    }
    catch (error) {
        console.error("Ocurrió un error al crear usuario:", error);
    }
}

export const deleteUsuario = async (url, id, usuarioLogeado) => {
    try {

        await fetch(`${url}/api/usuarios/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${usuarioLogeado.token}`,
                "Content-Type": "application/json",
            },
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

export const modifyUsuario = async (url, id, usuario, password, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);
        await fetch(`${url}/api/usuarios/${id}`, {
            method: 'POST',
            body: JSON.stringify({ usuario, password }),
            headers: {
                Authorization: `Bearer ${usuarioLogeado.token}`,
                "Content-Type": "application/json",
            },
        })
            .then(resp => {
                setIsLoadingCallback(false);
                if (resp.ok) console.log("se cambio el estado correctamenteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                else console.log("no se pudo cambiar el estado");
            })
    }
    catch (error) {
        console.error("Ocurrió un error al modificar usuario:", error);
    }
}
export const fetchPersonas = async (url, id, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);

        const response = await fetch(`${url}/api/personas${(id > 0) ? `/${id}` : ""}`,
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

export const deletePersona= async (url, id, usuarioLogeado) => {
    try {

        await fetch(`${url}/api/personas/${id}`, {
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

export const crearPersona = async (url, persona, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);
        const response = await fetch(`${url}/api/personas`, {
            method: 'POST',
            body: JSON.stringify(persona),
            headers: {
                Authorization: `Bearer ${usuarioLogeado.token}`,
                "Content-Type": "application/json",
            },
        })
        setIsLoadingCallback(false);
        const data = response.json();

        return response;

    }
    catch (error) {
        console.error("Ocurrió un error al crear usuario:", error);
    }
}
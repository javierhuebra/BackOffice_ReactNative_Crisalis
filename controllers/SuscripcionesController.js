
export const fetchSuscripciones= async (url, setIsLoadingCallback, usuarioLogeado) => {
    try {
        setIsLoadingCallback(true);

        const response = await fetch(`${url}/api/suscripciones`,
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

export const cambiarEstadoSuscripcion = async (url, id, usuarioLogeado) => {
    try {

        await fetch(`${url}/api/suscripciones/${id}`, {
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
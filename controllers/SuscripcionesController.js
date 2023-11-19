
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
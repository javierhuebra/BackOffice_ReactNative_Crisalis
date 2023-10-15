
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
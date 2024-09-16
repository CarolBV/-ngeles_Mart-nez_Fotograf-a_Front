import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth/authContext";

const useApi = (url, method = 'GET', body = null) => {
    const { token } = useAuth(); // Obtenemos el token del contexto
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);

            try {
                let response;

                const config = token ? {
                    headers: {
                        Authorization: `Bearer ${token}` // Incluimos el token en los headers si existe
                    }
                } : {};

                if (method === 'GET') {
                    response = await axios.get(url, config);
                } else if (method === 'POST') {
                    response = await axios.post(url, body, config);
                } else {
                    throw new Error(`Unsupported method: ${method}`);
                }

                const jsonData = response.data;
                setData(jsonData);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url, method, body, token]);

    return { data, loading, error };
};

export default useApi;
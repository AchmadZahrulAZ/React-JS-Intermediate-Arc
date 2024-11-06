import { useState, useEffect } from "react";
import axios from "axios";

// Mendefinisikan custom hook 
const useFetch = (url, queryParams = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  // Menggunakan useEffect untuk mengambil data dari API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Melakukan request GET ke URL dengan query params
        const resp = await axios.get(url, { params: queryParams });
        // Jika request berhasil, simpan data ke apiData
        setApiData(resp.data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Memanggil fetchData() untuk mengeksekusi request API
  }, [url, JSON.stringify(queryParams)]); // Memperhatikan queryParams sebagai dependensi

  return { isLoading, apiData, serverError };
};

export default useFetch;

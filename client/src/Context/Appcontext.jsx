import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Must import this way!
import axios from 'axios';
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [token, setToken] = useState(null);
  const [input, setInput] = useState("");

  const fetchAllBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blog/all'); 
      data.success ? setBlogs(data.blogs) : toast.error("Error fetching blogs");
    } catch (error) {
      toast.error("Error fetching blogs");
    }
  };

  useEffect(() => {
    fetchAllBlogs();
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
  }, []);

  const value = { axios, blogs, setBlogs, token, setToken, input, setInput };

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext);
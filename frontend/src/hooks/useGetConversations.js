import { useEffect, useState } from "react"
import toast from 'react-hot-toast'
import { useSocketContext } from "../context/SocketContext";

function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const {onlineUsers} = useSocketContext();


  useEffect(() => {
    const getConversations = async () => {
        setLoading(true)
        try { 
            const res = await fetch('/api/users');
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data.filteredUsers)
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
      }

      getConversations();
  }, [onlineUsers]);
  useEffect(() => {
    const getConversations = async () => {
        setLoading(true)
        try { 
            const res = await fetch('/api/users');
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data.filteredUsers)
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
      }

      getConversations();
  }, []);

  return {loading, conversations};
}

export default useGetConversations

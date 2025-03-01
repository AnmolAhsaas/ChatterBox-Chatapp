import { useState } from "react"
import userConversation from "../zustand/useConversation"
import toast from 'react-hot-toast'
function useSendMessage() {

  const [loading, setLoading] = useState(false)
  const {messages, setMessages, selectedConversation} = userConversation()
  const sendMessage = async (message) => {
    setLoading(true);
    try {   
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message})
      }) 

      const data = await res.json()
      if(data.error) throw new Error(data.error)

      setMessages([...messages, data.newMessage])
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setLoading(false) 
    }
  }
  return {sendMessage, loading}
}

export default useSendMessage

import React, { useState, useEffect, useRef } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import Load from "../components/Load";
import { queryAI, logout } from "../utils/api";

const ChatContainer = ({ token, setToken }) => {
  // state = {
  //   messages: [],
  //   loading: false,
  //   error: null,
  //   query: "",
  // };
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  // endOfMessagesRef = React.createRef();
  const endOfMessagesRef = useRef(null);

  // scrollToBottom = () => {
  //   this.endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // handleQuery = (e) => {
  //   e.preventDefault();
  //   this.scrollToBottom();
  //   const { query } = this.state;
  //   this.setState({ loading: true, error: null });
  //   queryAI({ query }, this.props.token)
  //     .then((res) => {
  //       this.setState({
  //         messages: [...this.state.messages, { query, data: res }],
  //         query: "",
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({ error: err.message });
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // };

  const handleQuery = async (e) => {
    e.preventDefault();
    scrollToBottom();
    setLoading(true);
    setError(null);

    try {
      const res = await queryAI({ query }, token);
      setMessages([...messages, { query, data: res }]);
      setQuery("");
    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    };
  };
  // handleChange = (e) => {
  //   this.setState({ query: e.target.value });
  // };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // // Lifecycle method untuk scroll otomatis ke bawah saat ada pesan baru
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.messages !== this.state.messages) {
  //     this.scrollToBottom();
  //   }
  // }

  // handleLogout = () => {
  //   this.setState({ loading: true });
  //   logout(this.props.token)
  //     .then(() => {
  //       this.props.setToken(null);
  //       localStorage.removeItem("token");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout(token);
      setToken(null);
      localStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
      <div>
        <Navbar logout={handleLogout} loading={loading} />
        <div className="container">
          {loading && messages.length === 0 ? (
            <Load />
          ) : (
            messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.data.data}
                query={message.query}
                isLoading={loading}
                lastArray={index === messages.length - 1}
                currentQuery={query}
              />
            ))
          )}
          {/* Elemen referensi untuk scroll otomatis */}
          <div ref={endOfMessagesRef} />
        </div>
        <ChatInput
          onSubmit={handleQuery}
          onChange={handleChange}
          loading={loading}
          query={query}
        />
      </div>
    );
  };

export default ChatContainer;
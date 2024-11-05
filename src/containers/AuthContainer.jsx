import React, { useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import { login, register } from '../utils/api';

const AuthContainer = ({ setToken }) => {
  // state = {
  //   isLogin: true,
  //   form: {
  //     username: "",
  //     password: "",
  //   },
  //   loading: false,
  //   error: null,
  // };

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.setToken(token);
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, [setToken]);

  // toggleLogin = () => {
  //   this.setState({ isLogin: !this.state.isLogin, error: null });
  // };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  // handleChange = (e) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ loading: true, error: null });

  //   if (this.state.isLogin) {
  //     login(this.state.form)
  //       .then((res) => {
  //         localStorage.setItem("token", res.accessToken);
  //         this.props.setToken(res.accessToken);
  //         this.setState({
  //           error: null,
  //           form: { username: "", password: "" },
  //         });
  //       })
  //       .catch((err) => {
  //         this.setState({ error: err.response.data.error });
  //       })
  //       .finally(() => {
  //         this.setState({ loading: false });
  //       });
  //   } else {
  //     register(this.state.form)
  //       .then(() => {
  //         alert("register success");
  //         this.setState({
  //           isLogin: true,
  //           error: null,
  //           form: { username: "", password: "" },
  //         });
  //       })
  //       .catch((err) => {
  //         this.setState({ error: err.response.data.error });
  //       })
  //       .finally(() => {
  //         this.setState({ loading: false });
  //       });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const res = await login(form);
        localStorage.setItem('token', res.accessToken);
        setToken(res.accessToken);
        setForm({ username: '', password: '' });
        setError(null);
      } else {
        await register(form);
        alert('register success');
        setIsLogin(true);
        setForm({ username: '', password: '' });
        setError(null);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginModal 
      form={form} 
      loading={loading} 
      error={error} 
      handleChange={handleChange} 
      isLogin={isLogin} 
      toggleLogin={toggleLogin} 
      handleSubmit={handleSubmit} 
      />
    </div>
  );
};

export default AuthContainer;

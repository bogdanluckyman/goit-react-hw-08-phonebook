import ContactsPage from 'pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import Register from 'pages/Register';
import LoginPage from 'pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    )
  );
};

import ContactsPage from 'pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import Register from 'pages/Register';
import LoginPage from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

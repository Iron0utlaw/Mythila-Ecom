import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

import { SupabaseProvider } from './context/SupabaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
//dev-3c82xj2f66zfey7k.us.auth0.com      domain
//MblV4zFByuXz2RQO7H9oNpIt6ux4uP5C      client id 
root.render(
    <SupabaseProvider>
    <Auth0Provider domain='dev-3c82xj2f66zfey7k.us.auth0.com' clientId='MblV4zFByuXz2RQO7H9oNpIt6ux4uP5C' redirectUri={window.location.origin} 
    cacheLocation='localstorage'>
        <UserProvider>
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
<App />
</CartProvider>
</FilterProvider>
</ProductsProvider>
</UserProvider>
</Auth0Provider>
</SupabaseProvider>
);

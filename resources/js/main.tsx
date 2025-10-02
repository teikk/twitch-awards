import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Router } from './Router';
import './bootstrap.js'

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <RouterProvider router={Router} />
        </React.StrictMode>
    );
}

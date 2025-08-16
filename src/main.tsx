// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Amplify } from 'aws-amplify';
import cfg from './amplifyconfiguration.json'; // ← これを使う

Amplify.configure({
  // ← Auth を追加（v6の書き方）
  Auth: {
    Cognito: {
      userPoolId: (cfg as any).aws_user_pools_id,
      userPoolClientId: (cfg as any).aws_user_pools_web_client_id,
      identityPoolId: (cfg as any).aws_cognito_identity_pool_id, // 任意
      loginWith: { email: true, username: false, phone: false },
    },
  },
  // API は今まで通り .env から
  API: {
    GraphQL: {
      endpoint: import.meta.env.VITE_AWS_APPSYNC_GRAPHQL_ENDPOINT,
      region: import.meta.env.VITE_AWS_APPSYNC_REGION,
      defaultAuthMode: 'apiKey',
      apiKey: import.meta.env.VITE_AWS_APPSYNC_API_KEY,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

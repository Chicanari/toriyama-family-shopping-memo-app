// src/amplify.ts
import { Amplify } from 'aws-amplify';
import cfg from './amplifyconfiguration.json';

const userPoolId = (cfg as any).aws_user_pools_id;
const userPoolClientId = (cfg as any).aws_user_pools_web_client_id;

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId,
      userPoolClientId,
      // 使うなら：identity pool（任意）
      identityPoolId: (cfg as any).aws_cognito_identity_pool_id,
      // ログイン方法
      loginWith: { email: true, username: false, phone: false },
    },
  },
  API: {
    GraphQL: {
      endpoint: (cfg as any).aws_appsync_graphqlEndpoint,
      region: (cfg as any).aws_appsync_region,   // ← API 側の region はOK
      defaultAuthMode:
        ((cfg as any).aws_appsync_authenticationType === 'API_KEY')
          ? 'apiKey'
          : 'userPool',
      apiKey: (cfg as any).aws_appsync_apiKey,
    },
  },
});

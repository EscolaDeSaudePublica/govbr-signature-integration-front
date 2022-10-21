/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_CLIENTE_ID: string;
  readonly VITE_SECRET: string;
  readonly VITE_SERVER_OAUTH: string;
  readonly VITE_API_URI: string;
  readonly VITE_ESPCE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

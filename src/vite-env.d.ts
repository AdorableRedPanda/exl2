/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_DB_NAME: string;
	readonly VITE_STORE_NAME: string;
	readonly VITE_DB_VERSION: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

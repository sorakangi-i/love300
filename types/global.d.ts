declare global {
  namespace NodeJS {
    export interface Process {
      browser: boolean;
    }

    export interface ProcessEnv {
      NODE_ENV: "production" | "development" | "test";
      KAKAO_AUTH_KEY: string;
    }
  }
  interface Window {
    naver: any;
    ethereum: any;
  }
  const Kakao;
}
export {};

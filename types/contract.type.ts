import { ethers } from "ethers";

// 사용자 정보 구조체의 타입 정의 (submitData와 일치)
interface UserInput {
  name: string;
  email: string;
  phone: string;
  gender?: string; // 선택적 필드
  weight?: string; // 선택적 필드
  height?: string; // 선택적 필드
  birth?: string;
  extraData?: string; // 선택적 필드
}

export interface Signer {
  getAddress: () => Promise<string>;
}

export interface SubmitData extends UserInput {
  extraData?: string;
}

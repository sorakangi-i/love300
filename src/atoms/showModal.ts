import { atom } from "jotai";
import { Lang } from "../../pages/_app";

export const showModal = atom<Lang | null>(null);
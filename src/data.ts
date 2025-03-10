import { Post } from "./types";

export const posts: Post[] = [
  {
    id: 1,
    title: "React + Vite + TailwindCSS 게시판",
    content: "React와 Vite를 활용하여 간단한 게시판을 만들어봅시다!",
    author: "John Doe",
    createdAt: "2025-03-10",
  },
  {
    id: 2,
    title: "TailwindCSS란?",
    content: "TailwindCSS는 유틸리티 퍼스트 CSS 프레임워크입니다.",
    author: "Jane Doe",
    createdAt: "2025-03-09",
  },
];

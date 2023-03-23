import { createContext } from "react";

// props-drilling을 피하기 위한 용도의 컨텍스트 생성
const WikiListContext = createContext(null);

export { WikiListContext }
import axios from "axios";

/**
 * 회원가입
 */
export const regUser = (joinData) => {
  const responcs = axios.post("/api/users", joinData);
  return responcs;
};

/**
 * 로그인
 * loginData {userId:'aa', userPw :'11'}
 */
export const loginUser = (loginData) => {
  const response = axios.get(
                      '/api/users/login',
                      {params:loginData}
                    )

  return response;
}

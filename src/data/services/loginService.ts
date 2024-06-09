export const loginService = async (username: string, password: string) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (username === "ceo" && password === "admin123") {
        resolve({ token: "1234567890" });
      } else {
        reject({ error: "Invalid username or password" });
      }
    }, 1000);
  });
};

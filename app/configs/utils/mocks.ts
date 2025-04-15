export const mockUser = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  image: "https://example.com/avatar.jpg",
};

export const mockUserSession = {
  user: mockUser,
  expires: new Date().toISOString(),
  accessToken: "dsbhkjscd",
  refreshToken: "894655sdc",
  userId: "1111",
};

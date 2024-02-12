export default () => ({
  port: parseInt(process.env.PORT) || 4000,
  secret_jwt: process.env.SECRET_JWT,
});

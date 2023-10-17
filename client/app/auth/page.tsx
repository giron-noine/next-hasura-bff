"use client";
import LoginButton from "../../components/auth/loginButton";
import LogoutButton from "../../components/auth/logoutButton";
import Profile from "../../components/auth/profile";
import { Auth0ProviderWrapper } from "../../lib/auth0ProviderWrapper";

export default function LoginHome() {
  return (
    <>
      {/* <Auth0ProviderWrapper> */}
      <h1>Login Page</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
      {/* </Auth0ProviderWrapper> */}
    </>
  );
}

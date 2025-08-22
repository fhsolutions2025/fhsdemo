import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ProfileContextValue {
  profile: string | null;
  setProfile: (profile: string | null) => void;
}

const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
  setProfile: () => {},
});

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<string | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    if (stored) {
      setProfileState(stored);
    }
  }, []);

  const setProfile = (p: string | null) => {
    setProfileState(p);
    if (typeof window !== "undefined" && p) {
      localStorage.setItem("profile", p);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
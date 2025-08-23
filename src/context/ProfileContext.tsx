import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface Profile {
  id: string;
  name: string;
  img: string;
  gradientFrom: string;
  gradientTo: string;
  palette: { primary: string; secondary: string; accent: string };
  featured: string;
}

interface ProfileContextValue {
  profile: Profile | null;
  setProfile: (p: Profile) => void;
}

const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
  setProfile: () => {},
});

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("profile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default useProfile;

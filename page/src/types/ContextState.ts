export interface AppContextType {
  url: string | null;
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

import { StatusBar } from "expo-status-bar";
import Login from "./src/app/login";
import Ranking from "./src/app/ranking";

export default function App() {
  return (
    <>
      <Ranking />
      <StatusBar style="auto" />
    </>
  );
}

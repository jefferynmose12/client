import LandingPage from "./components/LandingPage";
import StoreProvider from "./context/StoreProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <LandingPage />
      </StoreProvider>
    </>
  );
}

export default App;

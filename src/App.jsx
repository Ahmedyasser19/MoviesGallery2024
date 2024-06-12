import "./App.css";
import HomePage from "../pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import MoviePage from "../pages/MoviePage";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Moive/:id" element={<MoviePage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;

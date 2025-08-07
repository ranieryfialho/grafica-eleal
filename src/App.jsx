import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App;
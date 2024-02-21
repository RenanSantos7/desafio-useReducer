import { RouterProvider } from "react-router-dom";
import { RBankProvider } from "./contexts/RBankContext";
import router from "./router";

export default function App() {
  return (
    <RBankProvider>
      <RouterProvider router={router} />
    </RBankProvider>
  )
}

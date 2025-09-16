import CommonLayout from "./layout/CommonLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CommonLayout>
                <h1>Hi</h1>
              </CommonLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
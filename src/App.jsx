import { ConfigProvider } from "antd";
import AppRouter from "./router.jsx";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#FAFBFC",       // blue-50 background
          colorTextBase: "#172554",     // blue-950 text
          colorBgContainer: "#dbeafe",  // blue-100 secondary bg

          // Primary
          colorPrimary: "#2563eb",      // blue-600
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

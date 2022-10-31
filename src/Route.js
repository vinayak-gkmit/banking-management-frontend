import { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import { UserContext } from "./context/user.context";
import Navigations from "./components/navigations/navigation.component";
import RegisterForm from "./components/register-form/register-form.component";
import LoginForm from "./components/login-form/login-form.component";
import UserDashboard from "./routes/user-dashboard/user-dashboard.component";
import MoneyTransfer from "./components/money-transfer/money-transfer.component";
import DepositForm from "./components/deposit-form/deposit-form.component";
import FundTransfer from "./routes/fund-transfer/fund-transfer.component";
import Balance from "./components/balance/balance.component";
import Profile from "./components/profile/profile.components";

function MainRoutes() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigations />}>
        {/* {Object.keys(currentUser).length === 0 ? (
          <Route index element={<LoginForm />} />
        ) : (
          <Route index element={<UserDashboard />} />
        )} */}
        <Route index element={<Home />} />

        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="fund-transfer" element={<FundTransfer />}></Route>
        <Route path="balance" element={<Balance />} />
        <Route path="profile" element={<Profile />} />
        <Route path="fund-transfer/self-transfer" element={<DepositForm />} />
        <Route
          path="fund-transfer/other-transfer"
          element={<MoneyTransfer />}
        />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
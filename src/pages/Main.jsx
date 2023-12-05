import { FiSettings } from "react-icons/fi";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { getCookie } from "cookies-next";

import {
  Typebox,
  BuatTypebox,
  UpdateTypebox,
  Rekening,
  TambahRekening,
  UpdateRekening,
  User,
  TambahUser,
  UpdateUser,
  Customer,
  TambahCustomer,
  UpdateCustomer,
  TypeboxDetail,
  TambahTypeboxDetail,
  UpdateTypeboxDetail,
  IndexHarga,
  TambahIndex,
  UpdateIndex,
  Sopir,
  TambahSopir,
  UpdateSopir,
  Mobil,
  TambahMobil,
  UpdateMobil,
  Kualitas,
  UpdateKualitas,
  TambahKualitas,
  Order,
  OrderBaru,
  Detail,
  JobBaru,
} from "../pages";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  LoadingScreen,
  SidebarEkspedisi,
} from "../components";

import "../App.css";

import { useStateContext } from "../contexts/ContextProvider";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }

    setIsLoading(false);
  }, []);

  let sidebarComponent = <Sidebar />; // Default Sidebar component

  // Memeriksa nilai dari cookie "posisi"
  if (getCookie("posisi") === "ekspedisi" && activeMenu) {
    sidebarComponent = <SidebarEkspedisi />;
  }

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              {sidebarComponent}
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
               {sidebarComponent}
            </div>
          )}

        

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full md:w-[calc(100vw-288px)] relative "
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 relative "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Pelamar  */}
              <Route path="/master/type-box" element={<Typebox />} />

              <Route path="/TypeBox/BuatTypebox" element={<BuatTypebox />} />
              <Route
                path="/TypeBox/UpdateTypebox"
                element={<UpdateTypebox />}
              />
              <Route path="/customer/customers" element={<Customer />} />
              <Route path="/customer/tambah" element={<TambahCustomer />} />
              <Route path="/customer/update" element={<UpdateCustomer />} />

              <Route
                path="/master/type-box%20detail"
                element={<TypeboxDetail />}
              />
              <Route
                path="/TypeboxDetail/Update"
                element={<UpdateTypeboxDetail />}
              />
              <Route
                path="/TypeboxDetail/Buat"
                element={<TambahTypeboxDetail />}
              />
              <Route path="/index/index" element={<IndexHarga />} />
              <Route
                path="/TambahIndex/TambahIndex"
                element={<TambahIndex />}
              />
              <Route
                path="/UpdateIndex/UpdateIndex"
                element={<UpdateIndex />}
              />

              <Route path="/master/sopir" element={<Sopir />} />
              <Route path="/master/sopir/tambah" element={<TambahSopir />} />
              <Route path="/master/sopir/update" element={<UpdateSopir />} />

              <Route path="/master/mobil" element={<Mobil />} />
              <Route path="/master/mobil/tambah" element={<TambahMobil />} />
              <Route path="/master/mobil/update" element={<UpdateMobil />} />

              <Route path="/master/rekening" element={<Rekening />} />
              <Route
                path="/master/rekening/tambah"
                element={<TambahRekening />}
              />
              <Route
                path="/master/rekening/update"
                element={<UpdateRekening />}
              />

              <Route path="/master/user" element={<User />} />
              <Route path="/master/user/tambah" element={<TambahUser />} />
              <Route path="/master/user/update" element={<UpdateUser />} />

              <Route path="/master/Kualitas" element={<Kualitas />} />
              {/* <Route
                path="/master/Kualitas/update"
                element={<UpdateKualitas />}
              /> */}
              <Route
                path="/master/Kualitas/tambah"
                element={<TambahKualitas />}
              />

              <Route path="/order/list" element={<Order />} />
              <Route path="/order/order-baru" element={<OrderBaru />} />
              <Route path="/order/detail" element={<Detail />} />

              <Route path="/job/job-baru" element={<JobBaru />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;

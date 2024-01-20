import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import { ApartmentsModal, HouseModal, OfficeModal } from "../components";

const initialApartmentsModal = {
  isOpen: false,
  data: {
    type: "Apartment",
    address: "",
    postal_code: "",
    appartment_length: 20,
    number_of_rooms: 2,
    floor: 2,
    parking: "available",
    parking_distance: 1,
    elevator: "available",
    assembling_furniture: "With Assemble",
    other_rooms: [],
    new_address: "",
    new_postal_code: "",
    // new_appartment_length: 20,
    new_floor: 2,
    new_parking: "available",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "available",
    new_assembling_furniture: "With Assemble",
    further_services: [],
    details: {
      title: "mister",
      name: "",
      email: "",
      phone: "",
      interview_appointment: "",
      moving_date: "",
      message: "",
      terms: "",
    },
  },
};

const initialHouseModal = {
  isOpen: false,
  data: {
    type: "House",
    house_type: "Detached House",
    address: "",
    postal_code: "",
    appartment_length: 20,
    number_of_rooms: 2,
    parking: "available",
    parking_distance: 1,
    elevator: "available",
    assembling_furniture: "With Assemble",
    // floor: 2,
    other_rooms: [],
    new_address: "",
    new_postal_code: "",
    // new_appartment_length: 20,
    // new_floor: 2,
    new_parking: "available",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "available",
    new_assembling_furniture: "With Assemble",
    further_services: [],
    details: {
      title: "mister",
      name: "",
      email: "",
      phone: "",
      interview_appointment: "",
      moving_date: "",
      message: "",
      terms: "",
    },
  },
};

const initialOfficeModal = {
  isOpen: false,
  data: {
    type: "Office",
    address: "",
    postal_code: "",
    office_length: 20,
    number_of_rooms: 2,
    floor: 2,
    parking: "available",
    parking_distance: 1,
    elevator: "available",
    assembling_furniture: "With Assemble",
    // other_rooms: [],
    new_address: "",
    new_postal_code: "",
    // new_office_length: 20,
    new_floor: 2,
    new_parking: "available",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "available",
    new_assembling_furniture: "With Assemble",
    // further_services: [],
    details: {
      title: "mister",
      name: "",
      email: "",
      phone: "",
      interview_appointment: "",
      moving_date: "",
      message: "",
      terms: "",
    },
  },
};
const Home = () => {
  const [apartmentsModal, setApartmentsModal] = useState(
    initialApartmentsModal
  );
  const [houseModal, setHouseModal] = useState(initialHouseModal);
  const [officeModal, setOfficeModal] = useState(initialOfficeModal);

  return (
    <div className="w-screen h-screen bg-[url(/src/assets/images/home_background.jpg)] bg-center bg-cover bg-no-repeat">
      <div className="flex items-center justify-center w-full h-full bg-black/50">
        <div className="w-full max-w-xl mx-4 min-h-[250px] bg-gray-800/30 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white capitalize">
            Was kostet mein nächster Umzug ?
          </h2>
          <h2 className="mt-3 text-xs font-normal text-white">
            Jetzt kostenlos und einfach online berechnen!
          </h2>

          <div className="grid grid-cols-1 min-[400px]:grid-cols-3 mt-8 gap-5">
            <div
              onClick={() =>
                setApartmentsModal((prev) => ({ ...prev, isOpen: true }))
              }
              className="flex flex-col items-center space-y-4 font-bold text-center text-white cursor-pointer"
            >
              <BsBuildings className="text-5xl" />

              <button className="bg-gray-500/40 hover:text-red-700 hover:bg-white py-2 px-3.5 text-base rounded-md transition-all duration-300">
                Wohnung
              </button>
            </div>

            <div
              onClick={() =>
                setHouseModal((prev) => ({ ...prev, isOpen: true }))
              }
              className="flex flex-col items-center space-y-4 font-bold text-center text-white cursor-pointer"
            >
              <FaHome className="text-5xl" />

              <button className="bg-gray-500/40 hover:text-red-700 hover:bg-white py-2 px-3.5 text-base rounded-md transition-all duration-300">
                Haus
              </button>
            </div>

            <div
              onClick={() =>
                setOfficeModal((prev) => ({ ...prev, isOpen: true }))
              }
              className="flex flex-col items-center space-y-4 font-bold text-center text-white cursor-pointer"
            >
              <HiOfficeBuilding className="text-5xl" />

              <button className="bg-gray-500/40 hover:text-red-700 hover:bg-white py-2 px-3.5 text-base rounded-md transition-all duration-300">
                Büro
              </button>
            </div>
          </div>

          {apartmentsModal.isOpen && (
            <ApartmentsModal
              modal={apartmentsModal}
              setModal={setApartmentsModal}
            />
          )}

          {houseModal.isOpen && (
            <HouseModal modal={houseModal} setModal={setHouseModal} />
          )}

          {officeModal.isOpen && (
            <OfficeModal modal={officeModal} setModal={setOfficeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

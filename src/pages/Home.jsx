import React, { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import {
  Address,
  AssemblingFurniture,
  Elevator,
  LivingArea,
  OtherRooms,
  Parking,
  ParkingDistance,
  Rooms,
  Stairs,
  NewAddress,
  NewLivingArea,
  NewRooms,
  NewStairs,
  NewParking,
  NewParkingDistance,
  NewElevator,
  NewAssemblingFurniture,
  NewOtherRooms,
  FurtherServices,
  FreeOffer,
} from "../components/Apartments";
import {
  HouseType,
  LivingArea as LivingAreaHouse,
  FreeOffer as FreeOfferHouse,
} from "../components/House";
import {
  OfficeArea,
  FreeOffer as FreeOfferOffice,
  OfficeRooms,
  OfficeFloors,
  NewOfficeFloors,
} from "../components/Office";
import {
  ApartmentsModal,
  HouseModal,
  OfficeModal,
} from "../components";

const initialApartmentsModal = {
  isOpen: false,
  components: [
    Address,
    LivingArea,
    Rooms,
    Stairs,
    Parking,
    ParkingDistance,
    Elevator,
    AssemblingFurniture,
    OtherRooms,
    NewAddress,
    // NewLivingArea,
    NewStairs,
    NewParking,
    NewParkingDistance,
    NewElevator,
    NewAssemblingFurniture,
    FurtherServices,
    FreeOffer,
  ],
  data: {
    address: "karachi",
    postal_code: "34564",
    living_area_length: 20,
    number_of_rooms: 2,
    floor: 2,
    parking: "Yes",
    parking_distance: 1,
    elevator: "Yes",
    assembling_furniture: "with assemble",
    other_rooms: [],
    new_address: "karachi",
    new_postal_code: "34564",
    // new_living_area_length: 20,
    new_floor: 2,
    new_parking: "Yes",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "Yes",
    new_assembling_furniture: "with assemble",
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
  components: [
    HouseType,
    Address,
    LivingAreaHouse,
    Rooms,
    Parking,
    ParkingDistance,
    Elevator,
    AssemblingFurniture,
    // Stairs,
    OtherRooms,
    NewAddress,
    // NewLivingArea,
    // NewStairs,
    NewParking,
    NewParkingDistance,
    NewElevator,
    NewAssemblingFurniture,
    FurtherServices,
    FreeOfferHouse,
  ],
  data: {
    house_type: "detached_house",
    address: "karachi",
    postal_code: "34564",
    living_area_length: 20,
    number_of_rooms: 2,
    parking: "Yes",
    parking_distance: 1,
    elevator: "Yes",
    assembling_furniture: "with assemble",
    // floor: 2,
    other_rooms: [],
    new_address: "karachi",
    new_postal_code: "34564",
    // new_living_area_length: 20,
    // new_floor: 2,
    new_parking: "Yes",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "Yes",
    new_assembling_furniture: "with assemble",
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
  components: [
    Address,
    OfficeArea,
    OfficeRooms,
    OfficeFloors,
    Parking,
    ParkingDistance,
    Elevator,
    AssemblingFurniture,
    // OtherRooms,
    NewAddress,
    // NewLivingArea,
    // NewStairs,
    NewOfficeFloors,
    NewParking,
    NewParkingDistance,
    NewElevator,
    NewAssemblingFurniture,
    // FurtherServices,
    FreeOfferOffice,
  ],
  data: {
    address: "karachi",
    postal_code: "34564",
    office_area_length: 20,
    number_of_rooms: 2,
    floor: 2,
    parking: "Yes",
    parking_distance: 1,
    elevator: "Yes",
    assembling_furniture: "with assemble",
    // other_rooms: [],
    new_address: "karachi",
    new_postal_code: "34564",
    // new_office_area_length: 20,
    // new_floor: 2,
    new_parking: "Yes",
    // new_number_of_rooms: 2,
    new_parking_distance: 1,
    new_elevator: "Yes",
    new_assembling_furniture: "with assemble",
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
        <div className="w-full max-w-xl min-h-[250px] bg-gray-800/30 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white capitalize">
            How much will my next move cost?
          </h2>
          <h2 className="mt-3 text-xs font-normal text-white">
            Calculate online now for free and easily!
          </h2>

          <div className="grid grid-cols-3 mt-8 gap-x-5">
            <div
              onClick={() =>
                setApartmentsModal((prev) => ({ ...prev, isOpen: true }))
              }
              className="flex flex-col items-center space-y-4 font-bold text-center text-white cursor-pointer"
            >
              <BsBuildings className="text-5xl" />

              <button className="bg-gray-500/40 hover:text-red-700 hover:bg-white py-2 px-3.5 text-base rounded-md transition-all duration-300">
                Apartment
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
                House
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
                Office
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

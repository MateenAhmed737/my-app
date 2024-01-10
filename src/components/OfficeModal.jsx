import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import {
  Address,
  AssemblingFurniture,
  Elevator,
  Parking,
  ParkingDistance,
  NewAddress,
  // NewLivingArea,
  // NewRooms,
  NewParking,
  NewParkingDistance,
  NewElevator,
  NewAssemblingFurniture,
  // NewOtherRooms,
} from "./Apartments";
import {
  OfficeArea,
  FreeOffer as FreeOfferOffice,
  OfficeRooms,
  OfficeFloors,
  NewOfficeFloors,
} from "../components/Office";

const components = [
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
];

const apiParams = {
  type: "type",
  address: "address",
  postal_code: "postal_code",
  appartment_length: "appartment_length",
  number_of_rooms: "rooms_number",
  floor: 2,
  parking: "Yes",
  parking_distance: 1,
  elevator: "Yes",
  assembling_furniture: "with assemble",
  other_rooms: [],
  new_address: "",
  new_postal_code: "",
  // new_appartment_length: "",
  new_floor: 2,
  new_parking: "Yes",
  // new_number_of_rooms: "",
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
};

const store_url = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const OfficeModal = ({ modal, setModal, initialIndex = 0 }) => {
  const initialState = modal.data;
  const [state, setState] = useState(initialState);
  const [curIndex, setCurIndex] = useState(initialIndex);
  const Component =
    curIndex !== null && curIndex !== undefined && components[curIndex];

  const close = () => {
    setModal({ ...modal, isOpen: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLast = curIndex === components.length - 1;
    const keys = Object.keys(state);

    if (!isLast) {
      return setCurIndex(curIndex + 1);
    }

    try {
      const formdata = new FormData();

      keys.forEach((key) => {
        if (key === "details") {
          const details = state[key];
          const detailParams = apiParams.details;

          Object.keys(details).forEach((detailKey) => {
            formdata.append(detailParams[detailKey], details[detailKey]);
          });
        } else {
          formdata.append(apiParams[key], state[key]);
        }
      });

      const requestOptions = {
        method: "POST",
        body: formdata,
        headers: {
          Accept: "application/json",
        },
        redirect: "follow",
      };

      const res = await fetch(store_url, requestOptions);
      const data = await res.json();
      console.log(data);

      if (data.success) {
        close();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const componentProps = {
    handleSubmit,
    state,
    setState: (key, value) => setState((prev) => ({ ...prev, [key]: value })),
  };

  const styles = {
    modal: {
      base: "fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-opacity",
      open: modal.isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none",
    },
    content: `bg-white w-full mx-5 max-w-xl rounded-md`,
    header: "flex justify-between items-center py-3 px-4 border-b",
    main: {
      base: `p-4 pt-10 sm:pt-4 overflow-y-auto max-h-[70vh] min-h-[50vh] ${
        curIndex !== components?.length - 1
          ? "flex justify-center items-center"
          : ""
      }`,
      get() {
        return `${this.base}`;
      },
    },
    footer: "flex justify-between items-center py-3 px-4 border-t",
    closeButton:
      "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center fixed top-2 right-2",
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div
      className={`${styles.modal.base} ${styles.modal.open}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <button type="button" onClick={close} className={styles.closeButton}>
          <VscClose />
        </button>
        <div className={styles.main.get()}>
          {Component && <Component {...componentProps} />}
        </div>

        <div className={styles.footer}>
          {/* Styled Prev and Next Buttons */}
          <button
            type="button"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:hover:bg-blue-500 disabled:saturate-0"
            onClick={() => setCurIndex(curIndex - 1)}
            disabled={curIndex === 0}
          >
            Back
          </button>

          {/* Dot indicators */}
          <div className="min-[450px]:flex">
            {components.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full mx-[1px] transition-all duration-300 ${
                  index === curIndex ? "bg-blue-500 !w-5" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            form="current-form"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:hover:bg-blue-500 disabled:saturate-0"
            // disabled={curIndex === modal.components.length - 1}
          >
            {curIndex === components.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeModal;

import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { base_url } from "../utils/url";
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
  // NewLivingArea,
  // NewRooms,
  NewStairs,
  NewParking,
  NewParkingDistance,
  NewElevator,
  NewAssemblingFurniture,
  // NewOtherRooms,
  FurtherServices,
  FreeOffer,
} from "./Apartments";
import { Button } from "./Button";

const components = [
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
];

const apiParams = {
  type: "type",
  address: "address",
  postal_code: "postal_code",
  appartment_length: "appartment_length",
  number_of_rooms: "rooms_number",
  floor: "floor_number",
  parking: "parking_spaces",
  parking_distance: "distance_parking_lot",
  elevator: "elevator",
  assembling_furniture: "assembling_furniture",
  other_rooms: "other_rooms",
  new_address: "new_address",
  new_postal_code: "new_postal_code",
  // new_appartment_length: "",
  new_floor: "new_floor_number",
  new_parking: "new_parking",
  // new_number_of_rooms: "",
  new_parking_distance: "new_distance_parking",
  new_elevator: "new_elevator",
  new_assembling_furniture: "new_assembling_furniture",
  further_services: "further_services",
  details: {
    title: "recive_offer",
    name: "name",
    email: "email",
    phone: "phone",
    interview_appointment: "interview_appointment",
    moving_date: "moving_date",
    message: "message",
    terms: "terms_and_conditions",
  },
};

const store_url = `${base_url}/store-data`;

const ApartmentsModal = ({ modal, setModal, initialIndex = 0 }) => {
  const initialState = modal.data;
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);
  const [curIndex, setCurIndex] = useState(initialIndex);
  const Component =
    curIndex !== null && curIndex !== undefined && components[curIndex];
  const isLast = curIndex === components.length - 1;

  const close = () => {
    setModal({ data: state, isOpen: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keys = Object.keys(state);

    if (!isLast) {
      return setCurIndex(curIndex + 1);
    }

    setLoading(true);

    try {
      const formdata = new FormData();

      keys.forEach((key) => {
        if (key === "details") {
          const details = state[key];
          const detailParams = apiParams.details;

          Object.keys(details).forEach((detailKey) => {
            formdata.append(detailParams[detailKey], details[detailKey]);
            console.log(detailParams[detailKey], details[detailKey]);
          });
        } else if (Array.isArray(state[key])) {
          formdata.append(apiParams[key], JSON.stringify(state[key]));
          console.log(apiParams[key], JSON.stringify(state[key]));
        } else {
          formdata.append(apiParams[key], state[key]);
          console.log(apiParams[key], state[key]);
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
      console.log("res ==>", data);

      if (data.success) {
        close();
        alert(data.success.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          <Button
            title="Back"
            onClick={() => setCurIndex(curIndex - 1)}
            disabled={loading || curIndex === 0}
          />

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

          <Button
            type="submit"
            title={
              isLast && loading
                ? "Submitting..."
                : isLast && !loading
                ? "Submit"
                : "Next"
            }
            disabled={loading}
            form="current-form"
          />
        </div>
      </div>
    </div>
  );
};

export default ApartmentsModal;

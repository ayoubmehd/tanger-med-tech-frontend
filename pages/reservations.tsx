import type { NextPage } from "next";
import CardTable from "components/Cards/CardTable";
import AppTd from "components/Table/AppTd";
import AppTh from "components/Table/AppTh";
import { useEffect, useState } from "react";
import Pagination from "components/Utils/Pagination";
import usePagination from "hooks/usePagination";
import { useRouter } from "next/router";
import fetchResource from "../hooks/fetch";

const useQuery = fetchResource<Reservation>("reservations");

function Thead() {
  return (
    <tr>
      <AppTh color="light">Date</AppTh>
      <AppTh color="light">Is Done</AppTh>
      <AppTh color="light">Transporter</AppTh>
      <AppTh color="light">Containers</AppTh>
    </tr>
  );
}

const Reservations: NextPage = () => {
  const router = useRouter();
  const { result: reservations, error, isLoading } = useQuery();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {reservations && <Pagination<Reservation[]> paginator={reservations} />}
        <CardTable title="Reservations" thead={<Thead />}>
          {reservations?.data?.map((reservation: Reservation) => (
            <tr key={reservation._id}>
              <AppTd>{new Date(reservation.date).toLocaleString("fr")}</AppTd>
              <AppTd>{reservation.isDone ? "Yes" : "No"}</AppTd>
              <AppTd>{reservation.transporter?.client || ""}</AppTd>
              <AppTd>{reservation.containers?.length?.toString() || ""}</AppTd>
            </tr>
          ))}
        </CardTable>
        {reservations && <Pagination<Reservation[]> paginator={reservations} />}
      </div>
    </div>
  );
};

export default Reservations;

import { AxiosResponse } from "axios";
import api from "../../api/index";

it("should get paginated reservation", async () => {
  const { getAll } = api("reservations");

  const [err, result] = await getAll(1);
  expect(err).toBeNull();
  const response = <AxiosResponse>result;
  const { prevPage, nextPage, data, currentPage } = <Paginate<Reservation>>(
    response.data
  );

  expect(response.status).toBe(200);
  expect(prevPage).toBeNull();
  expect(data).toContainEqual(expect.anything());
  expect(currentPage).not.toBeNull();
});
it("should create a new reservation", async () => {
  const { create } = api("reservations");

  const { getAll: getAllContainers } = api<Container>("containers");

  const [containerErr, containersResponse] = await getAllContainers(1);

  expect((<AxiosResponse>containersResponse).data).not.toBeNull();
  const payload: ReservationInput = {
    date: new Date(),
    isDone: false,
    transporter: {
      client: "Blaaa",
      matricule: "jdhsafjksahfdsf",
      type: "iusto",
    },
    containers: (<Container[]>(<AxiosResponse>containersResponse).data).slice(
      0,
      6
    ),
  };

  const [err, result] = await create(payload);
  expect(err).toBeNull();
  const response = <AxiosResponse>result;

  const reservation = <Reservation>response.data;

  expect(response.status).toBe(201);
  expect(reservation).not.toBeNull();
  expect(new Date(reservation.date)).toEqual(payload.date);
  expect(reservation.isDone).toBe(payload.isDone);
});

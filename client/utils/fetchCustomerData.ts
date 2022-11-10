import axios, { AxiosInstance, AxiosResponse } from "axios";
import type { Customer, Customers, CustomerType } from "../models/types";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export const fetchCustomers = async () => {
  const customers: AxiosResponse<Customers> = await instance.get("clients");
  return customers?.data;
};

export const addNewCustomer = async (customer: CustomerType) => {
  const resp: AxiosResponse<Customers> = await instance.post(
    "clients",
    customer
  );
  return resp?.data;
};

type CustomerId = Pick<Customer, "_id">;

export const deleteCustomer = async (customer: CustomerId) => {
  const resp = await instance.delete("clients");
  return resp?.data;
};
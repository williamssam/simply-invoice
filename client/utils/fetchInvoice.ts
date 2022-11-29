import axios, { AxiosInstance, AxiosResponse } from "axios";
import type { AllInvoice } from "../models/types";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export const fetchAllInvoice = async () => {
  const invoices: AxiosResponse<AllInvoice> = await instance.get("invoices");
  return invoices?.data;
};

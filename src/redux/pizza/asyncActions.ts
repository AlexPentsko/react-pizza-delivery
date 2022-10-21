import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params: Record<string, string>) => {
    const { search, category, sortBy, order, currentPage } = params;
    const { data } = await axios.get(
      `https://6331945fcff0e7bf70f14f31.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data as Pizza[];
  },
);

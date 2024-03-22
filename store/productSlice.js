import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const configId = "192.168.1.37"

export const fetchingProducts = createAsyncThunk(
  "fetching/products",
  async () => {
    try {
      const result = await axios.get(`http://${configId}:8081/data.json`);
      console.log(result.data, "result from the store");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "fetching/oneproduct",
  async (id) => {
    let founded;
    try {
      const result = await axios.get(`http://${configId}:8081/data.json`);
      founded = result.data.find((e) => e.id === +id);
      console.log(founded, "founded");
      return founded;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchingProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export default productSlice.reducer;

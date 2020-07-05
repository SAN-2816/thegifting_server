import express from "express";
import { getDelivery } from "../controllers/deliveryController";

const delivery = express.Router();

delivery.get("/find", getDelivery);

export default delivery;

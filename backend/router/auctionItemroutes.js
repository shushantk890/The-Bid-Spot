import {
  addNewAuctionItem,
  getAllItems,
  getAuctionDetails,
  getMyAuctionItems,
  removeFromAuction,
  republishItem,
} from "../controllers/auctionItemController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import express from "express";
import { trackCommissionStatus } from "../middlewares/trackCommissionStatus.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  isAuthorized("Auctioneer"),
  trackCommissionStatus,
  addNewAuctionItem
);

router.get("/allitems", getAllItems);

router.get("/auction/:id", isAuthenticated, getAuctionDetails);  //SETUP ROUTE FOR FUCTION CREATED IN AUCTIONITEMCONTROLLER

router.get(
  "/myitems",
  isAuthenticated,
  isAuthorized("Auctioneer"),
  getMyAuctionItems
);

router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Auctioneer"),
  removeFromAuction
);

router.put(                         //FOR NOT REPUBLISING UNTIL COMMISSION IS CLEARED
  "/item/republish/:id",
  isAuthenticated,                  
  isAuthorized("Auctioneer"),
  republishItem
);

export default router;

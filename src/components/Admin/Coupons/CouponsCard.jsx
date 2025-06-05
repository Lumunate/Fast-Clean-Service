"use client";
import React, { useEffect, useState } from "react";
import {
  ButtonLearnMore,
  CardBody,
  CardHeading,
  CardSubheading,
  StyledCard,
  StyledTable,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
} from "../../mui/AdminPkgs";
import { Box, IconButton, Paper, Table, TableBody, TableHead } from "@mui/material";
import { useCoupons } from "../../../hooks/useCoupons";
import DeleteIcon from "@mui/icons-material/Delete";
import NewCouponModal from "./NewCouponModal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const tableHeaders = ["ID", "Code", "Current Uses", "Discount Percentage", "Valid From", "Valid To", "Actions"];

const CouponsCard = () => {
  const { getCoupons, deleteCoupon } = useCoupons();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const loadCoupons = async () => {
      const data = await getCoupons();
      setCoupons(data);
    };

    loadCoupons();
  }, []);

  const handleDelete = (id) => {
    setCoupons(coupons.filter((_, i) => i !== id));
    deleteCoupon(id);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCard>
        <CardBody>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <Box>
              <CardHeading>All Coupons</CardHeading>
              <CardSubheading>Manage all your Coupons.</CardSubheading>
            </Box>
            <ButtonLearnMore onClick={() => setOpenModal(true)} sx={{ marginLeft: "1rem", height: "max-content", p: 2 }}>
              Add Coupon
            </ButtonLearnMore>
          </Box>

          <StyledTable component={Paper}>
            <Table aria-label="coupons table">
              <TableHead>
                <TableRowCustom>
                  {tableHeaders.map((header, index) => (
                    <TableHeaderCell
                      key={index}
                      sx={{
                        fontSize: "1.2rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {header}
                    </TableHeaderCell>
                  ))}
                </TableRowCustom>
              </TableHead>
              <TableBody>
                {coupons?.map((coupon, index) => (
                  <TableRowCustom key={index}>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>{coupon._id.slice(0, 6)}...</TableCellCustom>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>{coupon.code}</TableCellCustom>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>{coupon.currentUses}</TableCellCustom>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>{coupon.discountPercentage} %</TableCellCustom>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                      {new Date(coupon.validFrom).toLocaleDateString()}
                    </TableCellCustom>
                    <TableCellCustom sx={{ fontSize: "1.1rem", color: "black" }}>
                      {new Date(coupon.validUntil).toLocaleDateString()}
                    </TableCellCustom>
                    <TableCellCustom sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                      <IconButton
                        onClick={() => {
                          handleDelete(coupon._id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCellCustom>
                  </TableRowCustom>
                ))}
              </TableBody>
            </Table>
          </StyledTable>
        </CardBody>
      </StyledCard>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NewCouponModal openModal={openModal} setOpenModal={setOpenModal} setCoupons={setCoupons} />
      </LocalizationProvider>
    </>
  );
};

export default CouponsCard;

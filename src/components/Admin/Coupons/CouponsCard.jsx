"use client";
import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardHeading,
  CardSubheading,
  StyledCard,
  StyledTable,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
} from "../../mui/AdminPkgs";
import { IconButton, Paper, Table, TableBody, TableHead, TablePagination } from "@mui/material";
import { useCoupons } from "../../../hooks/useCoupons";
import DeleteIcon from "@mui/icons-material/Delete";

const tableHeaders = ["ID", "Code", "Current Uses", "Discount Percentage", "Valid From", "Valid To", "Actions"];

const CouponsCard = () => {
  const { getCoupons, createCoupon, deleteCoupon, loading, error } = useCoupons();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const loadCoupons = async () => {
      const data = await getCoupons();
      setCoupons(data);
    };

    loadCoupons();
  }, [getCoupons]);

  console.log(coupons);

  const handleCreateCoupon = async () => {
    const newCoupon = await createCoupon({
      code: "SUMMER25",
      discountPercentage: 25,
      validFrom: new Date(),
      validUntil: new Date("2025-12-31"),
      maxUses: 100,
    });

    if (newCoupon) {
      setCoupons((prev) => [...prev, newCoupon]);
    }
  };

  const handleDelete = (id) => {
    setCoupons(coupons.filter((_, i) => i !== id));
    deleteCoupon(id);
  };

  return (
    <StyledCard>
      <CardBody>
        <CardHeading>All Coupons</CardHeading>
        <CardSubheading>Manage all your Coupons.</CardSubheading>

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
                        handleDelete(row._id);
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
  );
};

export default CouponsCard;

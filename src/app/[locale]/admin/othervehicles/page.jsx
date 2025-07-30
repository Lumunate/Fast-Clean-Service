"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableHead,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import {
  SectionHeading,
  StyledCard,
  StyledTable,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
  NavbarSearch,
  SearchInput
} from "../../../../components/mui/AdminPkgs";
import useSnackbar from "../../../../hooks/useSnackbar";
import { useTranslations } from "next-intl";
import { useTheme } from "../../../../contexts/themeContext";

export default function OtherVehiclesAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const t = useTranslations("admin_dashboard.other_vehicles");
  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/other-vehicles");
      const json = await response.json();
      // sort by newest first
      const sorted = json.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setData(sorted);
    } catch (err) {
      console.error(err);
      openSnackbar("Error fetching records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/other-vehicles?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      openSnackbar("Deleted record successfully");
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar("Error deleting record");
    }
  };

  const handleComplete = async (id) => {
    try {
      await fetch(`/api/other-vehicles?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      });
      openSnackbar("Marked as completed successfully");
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar("Error marking as complete");
    }
  };

  const filteredData = data.filter(item =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vehicleType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serviceType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <Box sx={{ padding: "16px" }}>
        <SectionHeading sx={{ marginBottom: "2rem" }}>
          {t("0")}
        </SectionHeading>

        <StyledCard sx={{ marginBottom: "2rem" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
            <NavbarSearch sx={{ width: "250px" }}>
              <SearchInput
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </NavbarSearch>
          </Box>

          <StyledTable component="div">
            <Table>
              <TableHead>
                <TableRowCustom>
                  <TableHeaderCell>{t("1")}</TableHeaderCell>
                  <TableHeaderCell>{t("2")}</TableHeaderCell>
                  <TableHeaderCell>{t("3")}</TableHeaderCell>
                  <TableHeaderCell>{t("4")}</TableHeaderCell>
                  <TableHeaderCell>{t("5")}</TableHeaderCell>
                  <TableHeaderCell>{t("6")}</TableHeaderCell>
                  <TableHeaderCell>{t("7")}</TableHeaderCell>
                  <TableHeaderCell>{t("8")}</TableHeaderCell>
                  <TableHeaderCell>{t("9")}</TableHeaderCell>
                  <TableHeaderCell>{t("10")}</TableHeaderCell>
                </TableRowCustom>
              </TableHead>

              <TableBody>
                {loading ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={10} sx={{ textAlign: 'center' }}>
                        Loading...
                      </TableCellCustom>
                    </TableRowCustom>
                ) : filteredData.length === 0 ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={10} sx={{ textAlign: 'center' }}>
                        No records found
                      </TableCellCustom>
                    </TableRowCustom>
                ) : (
                    filteredData.map((row) => (
                        <TableRowCustom key={row._id}>
                          <TableCellCustom>{row.name}</TableCellCustom>
                          <TableCellCustom>{row.address || "N/A"}</TableCellCustom>
                          <TableCellCustom>{row.email}</TableCellCustom>
                          <TableCellCustom>{row.vehicleType}</TableCellCustom>
                          <TableCellCustom>{row.phone}</TableCellCustom>
                          <TableCellCustom>{row.serviceType}</TableCellCustom>
                          <TableCellCustom>{row.location}</TableCellCustom>
                          <TableCellCustom>{row.numVehicles}</TableCellCustom>
                          <TableCellCustom sx={{
                            color: row.isComplete ? 'success.main' : 'warning.main',
                            fontWeight: 'bold'
                          }}>
                            {row.isComplete ? 'Completed' : 'Pending'}
                          </TableCellCustom>
                          <TableCellCustom>
                            <IconButton onClick={() => handleDelete(row._id)} color="error">
                              <DeleteIcon />
                            </IconButton>
                            {!row.isComplete && (
                                <IconButton onClick={() => handleComplete(row._id)} color="success">
                                  <DoneIcon />
                                </IconButton>
                            )}
                          </TableCellCustom>
                        </TableRowCustom>
                    ))
                )}
              </TableBody>
            </Table>
          </StyledTable>
        </StyledCard>
      </Box>
  );
}

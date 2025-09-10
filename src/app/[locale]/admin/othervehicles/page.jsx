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
  SearchInput,
  ButtonLearnMore
} from "../../../../components/mui/AdminPkgs";
import useSnackbar from "../../../../hooks/useSnackbar";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "../../../../contexts/themeContext";
import { CSVLink } from "react-csv";

export default function OtherVehiclesAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const t = useTranslations("admin_dashboard.other_vehicles");
  const t1 = useTranslations("admin_dashboard.snackbar_message.other_vehicles");
  const t2 = useTranslations("admin_dashboard");

  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();
  const locale = useLocale()

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
      openSnackbar(t1("0"));
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
      openSnackbar(t1("1"));
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar(t1("2"));
    }
  };

  const handleComplete = async (id) => {
    try {
      await fetch(`/api/other-vehicles?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      });
      openSnackbar(t1("3"));
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar(t1("4"));
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

  const csvHeaders = [
  { label: "Name", key: "name" },
  { label: "Address", key: "address" },
  { label: "Email", key: "email" },
  { label: "Vehicle Type", key: "vehicleType" },
  { label: "Phone", key: "phone" },
  { label: "Service Type", key: "serviceType" },
  { label: "Location", key: "location" },
  { label: "Number of Vehicles", key: "numVehicles" },
  { label: "Status", key: "status" },
];


  return (
      <Box sx={{ padding: "16px" }}>
        <SectionHeading sx={{ marginBottom: "2rem" }}>
          {t("0")}
        </SectionHeading>

        <StyledCard sx={{ marginBottom: "2rem" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", justifyContent: "space-between" }}>
            <NavbarSearch sx={{ width: "250px" }}>
              <SearchInput
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </NavbarSearch>
             <ButtonLearnMore>
              <CSVLink
    data={data.map(row => ({
      name: row.name,
      address: row.address || "N/A",
      email: row.email,
      vehicleType: row.vehicleType,
      phone: row.phone,
      serviceType: row.serviceType,
      location: row.location,
      numVehicles: row.numVehicles ? `'${row.numVehicles}'` : "0",
      status: row.isComplete
        ? locale === "en"
          ? "Completed"
          : "Voltooid"
        : locale === "en"
        ? "Pending"
        : "In afwachting",
    }))}
    headers={csvHeaders}
    filename="other-vehicles.csv"
    className="btn btn-primary"
    style={{
      marginLeft: "1rem",
      padding: "8px 16px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    {t2("cvsButton")}
  </CSVLink>
             </ButtonLearnMore>
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
                            {row.isComplete ?  locale === 'en' 
                                ? 'Completed' 
                                : 'Voltooid'
                              : locale === 'en' 
                                ? 'Pending' 
                                : 'In afwachting'}
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

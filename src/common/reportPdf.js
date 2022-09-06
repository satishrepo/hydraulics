import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import * as moment from "moment";

const ReportPdf = ({ pdfData }) => {
  Font.register({
    family: "Helvetica",
  });

  const styles = StyleSheet.create({
    fs_10: {
      fontSize: "10px",
    },
    reportContainer: {
      width: "100%",
      padding: "10px",
    },
    headerRight: {
      textAlign: "right",
      width: "60%",
    },
    logo: {
      height: "50px",
      width: "100px",
    },
    reportHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "30px",
    },
    reportInfo: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexWrap: "wrap",
    },
    reportInfoChild: {
      width: "25%",
      marginBottom: "20px",
    },
    fs_18: {
      fontSize: "10px",
    },
    headerText: {
      fontSize: "10px",
    },
    fs_10_b: {
      fontSize: "10px",
      fontFamily: "Helvetica-Bold",
      marginBottom: "5px",
    },
    bold: {
      fontFamily: "Helvetica-Bold",
    },
    reportStatus: {
      fontSize: "15px",
      color: "green",
    },

    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      marginTop: "20px",
    },
    tableRow: { margin: "auto", flexDirection: "row" },
    tableCol: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
    red: {
      color: "red",
    },
    green: {
      color: "green",
    },
  });

  const getStatusStyle = (status) => {
    if (status === "Pass") return styles.green;
    else if (status === "Fail") return styles.red;
  };

  return (
    <Document>
      {pdfData.map((data) => (
        <Page size="A4">
          <View style={styles.reportContainer}>
            <View style={styles.reportHeader}>
              <Image source={"/assets/logo.png"} style={styles.logo}></Image>
              <View style={styles.headerRight}>
                <Text style={[styles.headerText, styles.bold]}>
                  {data["Item Code"]} {data["Valve Series"]}{" "}
                  {data["Serial Number"]} {data["Work Order Number"]} Report
                </Text>
                <Text style={[styles.fs_10, styles.bold]}>
                  {moment(new Date()).format("LLLL")}
                </Text>
              </View>
            </View>

            <View style={styles.reportInfo}>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Item Code</Text>
                <Text style={styles.fs_10}>{data["Item Code"]}</Text>
              </View>

              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Work Order Number</Text>
                <Text style={styles.fs_10}>{data["Work Order Number"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Serial Number</Text>
                <Text style={styles.fs_10}>{data["Serial Number"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Valve Series</Text>
                <Text style={styles.fs_10}>{data["Valve Series"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Operator Name</Text>
                <Text style={styles.fs_10}>{data["Operator Name"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>No. of Spools</Text>
                <Text style={styles.fs_10}>{data["No. of Spools"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Actuation Type</Text>
                <Text style={styles.fs_10}>{data["Actuation Type"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Work Order Qty.</Text>
                <Text style={styles.fs_10}>{data["WO Qty"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Air Test Status</Text>
                <Text style={styles.fs_10}>{data["Air Test Status"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Pressure Holding Status</Text>
                <Text style={styles.fs_10}>
                  {data["Pressure Holding Status"]}
                </Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Run Time</Text>
                <Text style={styles.fs_10}>{data["Run Time"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Oil Temp.</Text>
                <Text style={styles.fs_10}>{data["Oil Temperature"]}</Text>
              </View>
              <View style={styles.reportInfoChild}>
                <Text style={styles.fs_10_b}>Run</Text>
                <Text style={styles.fs_10}>{data["Run"]}</Text>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.reportStatus,
                  styles.bold,
                  data["responseMessage"] == "SUCCESS"
                    ? styles.green
                    : styles.red,
                ]}
              >
                REPORT STATUS: {data["responseMessage"]}
              </Text>
            </View>

            <View style={styles.table}>
              {/* TableHeader */}
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.bold]}>Test Name</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.bold]}>
                    Required Value
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.bold]}>
                    Actual Value
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.bold]}>
                    Actual Flow
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.bold]}>
                    Test Status
                  </Text>
                </View>
              </View>
              {/* TableContent */}
              {data.testData.map((item) => {
                return (
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.testName}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {" "}
                        {item.requiredValue}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.actualValue}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.actualFlow}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text
                        style={[
                          styles.tableCell,
                          getStatusStyle(item.testStatus),
                        ]}
                      >
                        {item.testStatus}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default ReportPdf;

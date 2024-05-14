import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  bold: { fontWeight: "bold" },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    margin: "10px 0px",
  },
});

const JobPDF = ({ job }) => {
  // Create Document Component
  const {
    job_title,
    job_description,
    job_banner_url,
    min_range,
    max_range,
    job_category,
    application_deadline,
  } = job;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image style={styles.image} src={job_banner_url} />
          <Text
            style={{
              fontSize: "24px",
              textAlign: "center",
              margin: "20px 20px",
            }}
          >
            {" "}
            {job_title}
          </Text>
          <Text style={styles.text}>Description: {job_description}</Text>
          <Text style={styles.text}>
            Salary Range: ${min_range} - ${max_range}{" "}
          </Text>
          <Text style={styles.text}>Job Category: {job_category}</Text>
          <Text style={styles.text}>
            Application Deadline: {application_deadline}
          </Text>
          <Text
            style={{
              margin: "auto 0 0 0",
              textAlign: "center",
              fontSize: "14px",
              borderTop: "1px solid #11111A",
              padding: "20px 0",
            }}
          >
            Authority by Jobhive
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default JobPDF;

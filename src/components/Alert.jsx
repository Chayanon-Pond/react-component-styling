// Start coding here

import { CircleCheckBig, Frown, Info, TriangleAlert } from "lucide-react";

function Alert({ severity = "info", content }) {
  const SEVERITY_STYLES = {
    error: {
      bgColor: "#F9C8C8",
      icon: Frown,
      iconColor: "red",
    },
    warning: {
      bgColor: "#F9D9C8",
      icon: TriangleAlert,
      iconColor: "orange",
    },
    info: {
      bgColor: "#F9EBC8",
      icon: Info,
      iconColor: "coral",
    },
    success: {
      bgColor: "#CEF7CD",
      icon: CircleCheckBig,
      iconColor: "green",
    },
  };

  const Icon = SEVERITY_STYLES[severity].icon;

  return (
    <div
      style={{
        backgroundColor: SEVERITY_STYLES[severity].bgColor,
        color: "#444444",
        display: "flex",
        paddingLeft: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: "5px",
        fontWeight: "bold",
        gap: "8px",
        fontSize: '20px',
      }}
    >
      <Icon
        style={{
          color: SEVERITY_STYLES[severity].iconColor,
        }}

      />{" "}
      {content}
    </div>
  );
}

export default Alert;

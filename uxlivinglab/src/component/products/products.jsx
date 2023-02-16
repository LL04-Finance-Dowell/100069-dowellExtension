import React, { useState } from "react";
import Box from "./box/Box";
import styles from "./styles.module.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";

const Products = () => {
  const { handleShow, data } = useStateContext();
  const [org, setOrg] = useState("skjdh");

  return (
    <div className={styles.cover}>
      <div className="item">
        <div className="{ props.text }">
          <button
            className="logout"
            style={{ width: 270, marginRight: 20, marginLeft: 0 }}
          >
            <i className="button-text" style={{ fontSize: 20 }}>
              Products
            </i>
          </button>
        </div>
        <select
          onChange={(e) => setOrg(e.target.value)}
          className={styles.dropdwn}
        >
          <option>select organization</option>

          {Array.from(
            new Set(
              data
                ?.filter((datum) => !datum?.portfolio)
                .map((datum) => datum.org_name)
            )
          ).map((org_name) => (
            <option value={`${org_name}`}>{org_name}</option>
          ))}

          {/* {data
            ?.filter((datum) => !datum?.portfolio)
            .map((datum, index) => (
              <option key={index} value={datum.org_name}>
                {datum.org_name}
              </option>
            ))} */}
        </select>
      </div>
      {products.map((item) => (
        <div key={item.id} class={styles.container}>
          <Box product={item.first} org_name={org} />
          <Box product={item.second} org_name={org} />
        </div>
      ))}
      <div className={styles.cross}>
        <RxCross2
          size={24}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginLeft: 5,
          }}
          onClick={() => handleShow(false)}
        />
      </div>
    </div>
  );
};

export default Products;

export const products = [
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Workflow-AI-2.png",
      id: crypto.randomUUID(),
      title: "Workflow AI",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Wifi-QR-Code-1.png",
      id: crypto.randomUUID(),
      title: "Will QR Code",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/customer-support-centre.png",
      id: crypto.randomUUID(),
      title: "Customer Support",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image: "https://uxlivinglab.com/wp-content/uploads/2022/12/UX-Live-1.png",
      id: crypto.randomUUID(),
      title: "UX Live",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/Permutation-calculator.png",
      id: crypto.randomUUID(),
      title: "Permutation Calculator",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/Sales-agent-app.png",
      id: crypto.randomUUID(),
      title: "Sales Agent",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/live-dashboard-1.png",
      id: crypto.randomUUID(),
      title: "Live Dashboard",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Social-media-automation-2.png",
      id: crypto.randomUUID(),
      title: "Team Management",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Living-Lab-Admin-2.png",
      id: crypto.randomUUID(),
      title: "Living Lab Monitoring",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Social-media-automation-1.png",
      id: crypto.randomUUID(),
      title: "Socialmedia Automation",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image: "https://uxlivinglab.com/wp-content/uploads/2022/12/Scales-1.png",
      id: crypto.randomUUID(),
      title: "Dowell Scales",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Logo-Scan-1.png",
      id: crypto.randomUUID(),
      title: "Logo Scan",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Livinglab-chat-1.png",
      id: crypto.randomUUID(),
      title: "Living Lab Chat",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Living-Lab-Admin-1.png",
      id: crypto.randomUUID(),
      title: "Living Lab Admin",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Legalzard-1.png",
      id: crypto.randomUUID(),
      title: "Legal Zard",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/dowell-maps-1.png",
      id: crypto.randomUUID(),
      title: "Living Lab Maps",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png",
      id: crypto.randomUUID(),
      title: "Digital Queue",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Customer-experience-1.png",
      id: crypto.randomUUID(),
      title: "Customer Experience",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/Living-Lab-Admin-2.png",
      id: crypto.randomUUID(),
      title: "Secure Repositories",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2023/01/secure-data.png",
      id: crypto.randomUUID(),
      title: "Secure Data",
      porfolios: [
        {
          portfolio_name: "Portfolio 01",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 02",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "Portfolio 3",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
];

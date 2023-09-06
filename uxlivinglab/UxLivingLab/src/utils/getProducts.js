// export function getProducts(orgName, data) {
//   console.log(orgName);

//   const orgProducts = data
//     ?.filter((item) => item.org_name === orgName && item.product)
//     .map((it) => ({ product: it.product }));
//   const newProduct = orgProducts.map((item) => {
//     products.filter((prd) => {
//       if (prd.title === item.product) {
//         return { image: prd.image, id: prd.id, title: prd.title };
//       }
//     });
//   });
//   console.log(newProduct);
//   return orgProducts;
// }

export function getProducts(orgName, data) {
  const filteredOrgData = data.filter(
    (item) => item.org_name === orgName && item.product
  );

  const uniqueProducts = {};
  const productsForOrg = [];

  filteredOrgData.forEach((item) => {
    const product = item.product;

    // Check if the product is not already in the uniqueProducts object
    if (!uniqueProducts[product]) {
      uniqueProducts[product] = true;

      const productInfo = products.find(
        (product) => product.title === item.product
      );

      if (productInfo) {
        productsForOrg.push({
          product,
          image: productInfo.image,
          id: productInfo.id,
          portfolio: item.portfolio_name,
        });
      }
    }
  });

  return productsForOrg;
}

export const products = [
  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Workflow-AI-2.png",
    title: "Workflow AI",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Wifi-QR-Code-1.png",
    id: crypto.randomUUID(),
    title: "Will QR Code",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2023/01/customer-support-centre.png",
    title: "Customer Support Centre",
  },
  {
    image: "https://uxlivinglab.com/wp-content/uploads/2022/12/UX-Live-1.png",
    id: crypto.randomUUID(),
    title: "UX Live",
  },
  {
    id: crypto.randomUUID(),

    image:
      "https://uxlivinglab.com/wp-content/uploads/2023/01/Permutation-calculator.png",
    title: "Permutation Calculator",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2023/01/Sales-agent-app.png",
    id: crypto.randomUUID(),
    title: "Sales Agent",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2023/01/live-dashboard-1.png",
    title: "Live Dashboard",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Social-media-automation-2.png",
    id: crypto.randomUUID(),
    title: "Team Management",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Living-Lab-Admin-2.png",
    title: "Living Lab Monitoring",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Social-media-automation-1.png",
    id: crypto.randomUUID(),
    title: "Socialmedia Automation",
  },

  {
    id: crypto.randomUUID(),
    image: "https://uxlivinglab.com/wp-content/uploads/2022/12/Scales-1.png",
    title: "Scales",
  },
  {
    image: "https://uxlivinglab.com/wp-content/uploads/2022/12/Logo-Scan-1.png",
    id: crypto.randomUUID(),
    title: "Logo Scan",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Livinglab-chat-1.png",
    title: "Living Lab Chat",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Living-Lab-Admin-1.png",
    id: crypto.randomUUID(),
    title: "Living Lab Admin",
  },

  {
    id: crypto.randomUUID(),
    image: "https://uxlivinglab.com/wp-content/uploads/2022/12/Legalzard-1.png",
    title: "Legal Zard",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/dowell-maps-1.png",
    id: crypto.randomUUID(),
    title: "Living Lab Maps",
  },

  {
    id: crypto.randomUUID(),
    image: "https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png",
    title: "Digital Queue",
  },
  {
    image:
      "https://uxlivinglab.com/wp-content/uploads/2022/12/Customer-experience-1.png",
    id: crypto.randomUUID(),
    title: "Customer Experience",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://uxlivinglab.com/wp-content/uploads/2023/01/Living-Lab-Admin-2.png",
    title: "Secure Repositories",
  },
  {
    image: "https://uxlivinglab.com/wp-content/uploads/2023/01/secure-data.png",
    id: crypto.randomUUID(),
    title: "Secure Data",
  },
];

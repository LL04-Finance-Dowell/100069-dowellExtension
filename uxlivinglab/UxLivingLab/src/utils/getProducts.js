import Fuse from "fuse.js";

export function getProducts(data) {
  const orgData = {};

  const fuse = new Fuse(products, {
    keys: ["title"],
    threshold: 0.3,
  });
  if (!data) return;
  data?.forEach((item) => {
    const orgId = item.org_name;
    if (!orgData[orgId]) {
      orgData[orgId] = [];
    }
    orgData[orgId].push(item);
  });

  const result = [];

  for (const orgId in orgData) {
    const items = orgData[orgId];
    const uniqueProducts = new Set();
    const productPortfolios = {};

    items.forEach((item) => {
      const product = item.product;
      const portfolioName = item.portfolio_name;

      if (!uniqueProducts.has(product)) {
        uniqueProducts.add(product);
        productPortfolios[product] = new Set();
      }

      if (portfolioName) {
        productPortfolios[product].add(portfolioName);
      }
    });

    // Convert portfolio sets back to arrays
    for (const product in productPortfolios) {
      productPortfolios[product] = [...productPortfolios[product]];
    }

    // Create a new object for each org_id with unique products and portfolios
    const orgInfo = {
      org_name: orgId,
      products: Object.keys(productPortfolios)
        .map((product) => {
          const productResult = fuse.search(product);
          if (productResult.length > 0) {
            const productObject = productResult[0].item;

            // Use filter to remove undefined values from the array
            const portfolios = productPortfolios[product].filter(
              (portfolio) => portfolio !== undefined
            );

            return {
              id: productObject.id,
              product: productObject.title,
              image: productObject.image,
              portfolios: portfolios,
            };
          }
        })
        .filter((product) => product !== undefined),
    };

    result.push(orgInfo);
  }
  return result;
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
    title: "Secure Github Repository",
  },
  {
    image: "https://uxlivinglab.com/wp-content/uploads/2023/01/secure-data.png",
    id: crypto.randomUUID(),
    title: "Secure Data",
  },
];

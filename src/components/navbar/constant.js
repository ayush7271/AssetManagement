export const sidebarName = [
  {
    name: "Dashboard",
    img: "https://assets.nobroker.in/merchandise/media/home.png",
  },
  {
    name: "My Assets",
    img: "https://assets.nobroker.in/merchandise/media/home.png",
  },
  {
    name: "My Requests",
    img: "https://assets.nobroker.in/merchandise/media/home.png",
  },
  {
    name: "New Requests",
    img: "https://assets.nobroker.in/merchandise/media/home.png",
  },
];

export const redirectLink = (page) => {
  const sessionQueryParams = sessionStorage.getItem("queryParams");
  switch (page) {
    case "Dashboard":
      return `/dashboard${sessionQueryParams ? sessionQueryParams : ""}`;
    case "My Assets":
      return `/myAssets${sessionQueryParams ? sessionQueryParams : ""}`;
    case "My Requests":
      return `/myRequests${sessionQueryParams ? sessionQueryParams : ""}`;
    case "New Requests":
      return `/newRequests${sessionQueryParams ? sessionQueryParams : ""}`;
  }
};

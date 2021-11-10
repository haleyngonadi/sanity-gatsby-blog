export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618bed502207545305a89285",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bthamves",
                  apiId: "0819e20d-1571-4051-b56f-e09d089c0d34",
                },
                {
                  buildHookId: "618bed501943fa4d8502f3c5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xsyp88i2",
                  apiId: "4b68e591-7f3a-45c6-9a0d-bbbcc19c81af",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/haleyngonadi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xsyp88i2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

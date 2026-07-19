/* eslint-disable @typescript-eslint/no-explicit-any */
export const structure = (S: any) =>
  S.list()
    .title("Sam Suseelan Studio")
    .items([
      S.listItem()
        .title("Settings & profile")
        .child(
          S.list()
            .title("Settings")
            .items([
              S.documentTypeListItem("siteSettings"),
              S.documentTypeListItem("personProfile"),
              S.documentTypeListItem("navigation"),
              S.documentTypeListItem("footer"),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (x: any) =>
          !["siteSettings", "personProfile", "navigation", "footer"].includes(
            x.getId(),
          ),
      ),
    ]);

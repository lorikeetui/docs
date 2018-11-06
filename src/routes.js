// Design guidelines
import PagePrinciples from "./pages/PagePrinciples";
import PageBuildingBlocks from "./pages/PageBuildingBlocks";
import PageDealingWithLatency from "./pages/PageDealingWithLatency";
import PageSigningTransactions from "./pages/PageSigningTransactions";
import PageInformingUsers from "./pages/PageInformingUsers";
import PageMotion from "./pages/PageMotion";
import PageLayout from "./pages/PageLayout";
import PageTypografy from "./pages/PageTypografy";
import PageAccessibility from "./pages/PageAccessibility";

// Reference
import PageButtons from "./pages/PageButtons";
import PageDropDown from "./pages/PageDropDown";
import PageContextMenu from "./pages/PageContextMenu";
import PageRadioButtons from "./pages/PageRadioButtons";
import PageTextInput from "./pages/PageTextInput";
import PageField from "./pages/PageField";
import PageLinks from "./pages/PageLinks";
import PageCards from "./pages/PageCards";
import PageTable from "./pages/PageTable";
import PageGraphs from "./pages/PageGraphs";
import PagePanels from "./pages/PagePanels";
import PageTheming from "./pages/PageTheming";

// Contributing
import PageJoinTheCommunity from "./pages/PageJoinTheCommunity";
import PageHowToContribute from "./pages/PageHowToContribute";

const preparePage = ([comp, name, path]) => ({
  comp,
  name,
  path: "/" + path.replace(/^\//, "") + (path === "/" ? "" : "/")
});

export const PAGE_GROUPS = [
  {
    name: "Design Guidelines",
    pages: [
      [PagePrinciples, "Principles", "/principles"],
      [PageBuildingBlocks, "Building blocks", "/building-blocks"],
      [PageDealingWithLatency, "Dealing with latency", "/dealing-with-latency"],
      [
        PageSigningTransactions,
        "Signing transactions",
        "/signing-transactions"
      ],
      [PageInformingUsers, "Informing users", "/informing-users"],
      [PageMotion, "Motion", "/motion"],
      [PageLayout, "Layout", "/layout"],
      [PageTypografy, "Typografy", "/typografy"],
      [PageAccessibility, "Accessibility", "/accessibility"]
    ].map(preparePage)
  },
  {
    name: "Reference",
    pages: [
      [PageButtons, "Buttons", "/buttons"],
      [PageDropDown, "Drop down", "/drop-down"],
      [PageContextMenu, "Context menu", "/context-menu"],
      [PageRadioButtons, "Radio buttons", "/radio-buttons"],
      [PageTextInput, "Text input", "/text-input"],
      [PageField, "Field", "/field"],
      [PageLinks, "Links", "/links"],
      [PageCards, "Cards", "/cards"],
      [PageTable, "Table", "/table"],
      [PageGraphs, "Graphs", "/graphs"],
      [PagePanels, "Panels", "/panels"],
      [PageTheming, "Theming", "/theming"]
    ].map(preparePage)
  },
  {
    name: "Contributing",
    pages: [
      [PageHowToContribute, "How to contribute", "/how-to-contribute"],
      [PageJoinTheCommunity, "Join the comunity", "/join-the-comunity"]
    ].map(preparePage)
  }
];

export const PAGES = [
  preparePage([PagePrinciples, "Principles", "/"]),
  ...PAGE_GROUPS.reduce((pages, group) => pages.concat(group.pages), [])
];

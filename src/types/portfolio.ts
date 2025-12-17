export type TabContentItem = {
    title: string;
    type: string;
    size: string;
    image: string;
  };
  
  export type TabContent = TabContentItem[];
  
  export type TabLabel =
    | "Show All"
    | "Design"
    | "Branding"
    | "Illustration"
    | "Motion";